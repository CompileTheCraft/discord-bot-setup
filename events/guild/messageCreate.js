require('dotenv').config();

const profileModel = require('../../models/profileSchema');

//create cooldowns map
const cooldowns = new Map();

module.exports = async (Discord, client, message) => {
  const prefix = process.env.PREFIX;
  const devChannel = client.channels.cache.get('875634635957215262');

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let profileData;
  try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0
      });
      profile.save();
    }
  } catch (err) {
    console.log(err);
  }

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

  const validPermissions = [
    "CREATE_INSTANT_INVITE",
    "KICK_MEMBERS",
    "BAN_MEMBERS",
    "ADMINISTRATOR",
    "MANAGE_CHANNELS",
    "MANAGE_GUILD",
    "ADD_REACTIONS",
    "VIEW_AUDIT_LOG",
    "PRIORITY_SPEAKER",
    "STREAM",
    "VIEW_CHANNEL",
    "SEND_MESSAGES",
    "SEND_TTS_MESSAGES",
    "MANAGE_MESSAGES",
    "EMBED_LINKS",
    "ATTACH_FILES",
    "READ_MESSAGE_HISTORY",
    "MENTION_EVERYONE",
    "USE_EXTERNAL_EMOJIS",
    "VIEW_GUILD_INSIGHTS",
    "CONNECT",
    "SPEAK",
    "MUTE_MEMBERS",
    "DEAFEN_MEMBERS",
    "MOVE_MEMBERS",
    "USE_VAD",
    "CHANGE_NICKNAME",
    "MANAGE_NICKNAMES",
    "MANAGE_ROLES",
    "MANAGE_WEBHOOKS",
    "MANAGE_EMOJIS",
  ];

  if (command == undefined) return message.reply("This command isn't available!. :x:");

  if (command.permissions.length) {
    let invalidPerms = []
    for (const perm of command.permissions) {
      if (!validPermissions.includes(perm)) {
        return console.log(`Invalid Permissions ${perm}`);
      }
      if (!message.member.permissions.has(perm)) {
        invalidPerms.push(perm);
      }
    }
    if (invalidPerms.length) {
      return message.channel.send(`Missing Permissions: \`${invalidPerms}\``);
    }
  }

  //If cooldowns map doesn't have a command.name key then create one.
  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const current_time = Date.now();
  const time_stamps = cooldowns.get(command.name);
  const cooldown_amount = (command.cooldown) * 1000;

  //If time_stamps has a key with the author's id then check the expiration time to send a message to a user.
  if (time_stamps.has(message.author.id)) {
    const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

    if (current_time < expiration_time) {
      let time_left = (expiration_time - current_time) / 1000;
      time_left = time_left.toFixed();

      if (time_left >= 3600) {
        time_left = time_left / 3600 + " hour[s]";
      } else if (time_left >= 60) {
        time_left = time_left / 60 + " minute[s]";
      } else {
        time_left = time_left;
      }

      const timeLeftEmbed = new Discord.MessageEmbed()
        .setTitle("Please wait! :x:")
        .setColor("#23d2ef")
        .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`\`${time_left}\` before using ${command.name}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

      return message.reply({ embeds: [timeLeftEmbed] });
    }
  }

  //If the author's id is not in time_stamps then add them with the current time.
  time_stamps.set(message.author.id, current_time);
  //Delete the user's id once the cooldown is over.
  setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

  try {
    command.execute(message, args, cmd, client, Discord, profileData);

    const slasherLoggingEmbed = new Discord.MessageEmbed()
      .setTitle("Slasher Command Logging")
      .setColor("#23d2ef")
      .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
      .setDescription("Developers: Devnamyte#0001 and JUSTMRBHD#0001")
      .addFields(
        { name: "Command Used: ", value: command.name },
        { name: "Used By: ", value: message.author.tag },
        { name: "Command used in Channel: ", value: message.channel.name },
        { name: "Command used in Guild: ", value: message.guild.name },
        { name: "Command used in Channel ID: ", value: message.channel.id },
        { name: "Command used in Guild ID: ", value: message.guild.id },
      )
      .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

    devChannel.send({ embeds: [slasherLoggingEmbed] });
  } catch (err) {
    message.reply("There was an error trying to execute this command!");
    console.log(err);
  }
}