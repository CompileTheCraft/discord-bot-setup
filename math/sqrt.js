import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function sqrt(msg, args) {
  if(args.length >= 2) return msg.channel.send("Only two values can be provided \`$sqrt <num1> <num2>\`");

  var num1 = parseInt(args[0]);

  embed.setTitle("The answer is...")
  embed.setDescription(`\`${Math.sqrt(num1)}\``)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  msg.channel.send(embed);
}

export default sqrt;