import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

async function kick(msg, args) {
  // Permission checking:
  if(!msg.member.hasPermission("KICK_MEMBERS")) return msg.channel.send("You do not have the correct permissions to run this command.");

  // Variables:
  const mentionedMember = msg.mentions.members.first();
  let reason = args.join(" ");

  if(!reason) reason = "No reason given.";

  // Stating the embed
  embed.setTitle(`You were kicked from ${msg.guild.name}`)
  embed.setDescription(`Reason for being kicked: ${reason}`)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  // Checking:
  if(!args[0]) return msg.channel.send("You need to mention a user to kick. \`$kick @user reason\`");
  if(!mentionedMember) return msg.channel.send(`The member mentioned is not in the server. You mentioned ${mentionedMember}`);

  // Executing:
  try{
    await mentionedMember.send(embed);
  } catch (err) {
    console.log("I was unable to message the member. Error: " + err);
  }

  try {
    await mentionedMember.kick(reason);
  } catch (err) {
    console.log(err);
    return msg.channel.send(`I was unable kick the member mentioned - ${mentionedMember}`);
  }
}

export default kick;