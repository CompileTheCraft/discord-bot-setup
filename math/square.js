import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function square(msg, args) {
  if(args.length >= 2) return msg.channel.send("Only two values can be provided \`$sq <num1>\`");

  var num1 = parseInt(args[0]);

  embed.setTitle("The answer is...")
  embed.setDescription(`\`${num1 * num1}\``)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  msg.channel.send(embed);
}

export default square;