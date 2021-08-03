import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function perimeter(msg, args) {
  if(args.length >= 3) return msg.channel.send("Only two values can be provided \`$perimeter <length> <breadth>\` **Note: Only Rectangle Perimeter**");

  let length = parseInt(args[0]);
  let breadth = parseInt(args[1]);

  let formula = 2 * (length + breadth)

  embed.setTitle("The answer is...")
  embed.setDescription(`\`${formula}\``)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  msg.channel.send(embed);
}

export default perimeter;