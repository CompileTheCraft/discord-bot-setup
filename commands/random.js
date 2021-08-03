import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function random(msg, args) {
  if(args.length === [1, 2, 3, 4, 5]) return msg.channel.send("The total number of arguments should be 6. You entered " + args.length + " arguments.");
  if(args.length <= 0) return msg.channel.send("No arguments provided.");
  if(args.length >= 7) return msg.channel.send("The total number of arguments should be 6. You entered " + args.length + " arguments.");

  const argsArr = [
    args[0],
    args[1],
    args[2],
    args[3],
    args[4],
    args[5],
  ];

  let randomArgs = Math.floor(Math.random() * argsArr.length);

  embed.setTitle("Random Generator")
  embed.setDescription(`${argsArr[randomArgs]} is randomly picked.`)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  msg.channel.send(embed);
}

export default random;