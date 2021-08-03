import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

async function ban(msg, args) {
  // Permission checking:
  if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("You do not have permission to run this command. :x:");
  if(!msg.guild.me.hasPermission("BAN_MEMBERS")) return msg.channel.send("I do not have permission to run this command. Please check the permissions. :x:");

  // Variables:
  let reason = args.join(" ");
  const mentionedMember = msg.mentions.members.first();

  // Input Checking:
  if(!reason) reason = 'No reason given.';
  if(!args[0]) return msg.channel.send("You must state someone to ban. \`$ban @user reason\`");
  if(!mentionedMember) return msg.channel.send("The mentioned member is not in the server.");
  if(!mentionedMember.bannable) return msg.channel.send("I can't ban that member.")

  // Executing:
  embed.setTitle(`You have been banned from ${msg.guild.name}`)
  embed.setDescription(`Reason for being banned: ${reason}`)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  await mentionedMember.send(embed).catch(err => console.log(err));
  await mentionedMember.ban({
    days: 7,
    reason: reason
  }).catch(err => console.log(err)).then(() =>msg.channe.send(`Successfully banned ${mentionedMember.user.tag}`));
}

export default ban;