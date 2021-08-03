import Discord from 'discord.js';
const attachment = new Discord.MessageAttachment("https://media.giphy.com/media/8lT5KZ9zd3w0odjJsN/giphy.gif");

function roast(msg, args) {
  let mentionedMember = args[0];
  if(!mentionedMember) return msg.channel.send("You did not mention anyone.");
  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("You don't have the permissions to run this command. :x:");

  msg.channel.send(`${mentionedMember} was roasted so badly by ${msg.author}`);
  msg.channel.send(attachment);
}

export default roast;