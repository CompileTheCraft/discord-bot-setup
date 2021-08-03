import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();
const client = new Discord.Client();

function message(msg, args) {
  const mentionedMember = msg.mentions.members.first();
  let reason = args.join(" ");

  if(!mentionedMember) return msg.channel.send("The mentioned member is not in this server. :x:");
  if(!reason) return msg.channel.send("No reason/message given. :x:");

  embed.setTitle(`Message from someone in your server ${msg.guild.name}`)
  embed.setDescription(`Message: ${reason}`)
  embed.setFooter(`From ${msg.author.tag}`)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  msg.delete();
  mentionedMember.send(embed);
}

export default message;