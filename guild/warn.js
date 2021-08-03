import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

async function warn(msg, args) {
  if(!msg.member.hasPermission("MANAGE_GUILD")) return msg.channel.send("You don't have the correct permissions to run this command.");

  const mentionedMember = msg.mentions.members.first();
  let reason = args.join(" ");

  if(!reason) reason = "No reason given.";

  embed.setTitle(`${mentionedMember} has been warned`)
  embed.setDescription(`Reason: ${reason}`)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  if(!args[0]) return msg.channel.send("You need to mention a user to warn. \`$warn @user reason\`");
  if(!mentionedMember) return msg.channel.send(`The mentioned member is not in the server. You mentioned ${mentionedMember}`);

  try {
    await msg.channel.send(embed);
  } catch (err) {
    console.log(err);
  }
}

export default warn;