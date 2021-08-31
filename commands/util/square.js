module.exports = {
  name: 'square',
  aliases: ['cube', 'cbrt', 'sqrt'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 5,
  desctiption: 'this command performs mathematical problems.',
  execute(message, args, cmd, client, Discord, profileData) {
    if (args.length >= 2) return message.channel.send("Only 1 value can be provided `$[operation] <num1>");

    var num1 = parseFloat(args[0]);

    if (cmd === "cube") {
      cube(message, num1, Discord)
    } else if (cmd === "sqrt") {
      sqrt(message, num1, Discord)
    } else if (cmd === "cbrt") {
      cbrt(message, num1, Discord)
    } else {
      const squareEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("The answer is...")
        .setDescription(`\`${num1 * num1}\``)
        .setColor("#23d2ef")
        .setTimestamp()

      message.channel.send({ embeds: [squareEmbed] });
    }
  }
}

function cube(message, num1, Discord) {
  const cubeEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle("The answer is...")
    .setDescription(`\`${num1 * num1 * num1}\``)
    .setColor("#23d2ef")
    .setTimestamp()

  message.channel.send({ embeds: [cubeEmbed] });
}

function sqrt(message, num1, Discord) {
  const sqrtEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle("The answer is...")
    .setDescription(`\`${Math.sqrt(num1)}\``)
    .setColor("#23d2ef")
    .setTimestamp()

  message.channel.send({ embeds: [sqrtEmbed] });
}

function cbrt(message, num1, Discord) {
  const cbrtEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle("The answer is...")
    .setDescription(`\`${Math.cbrt(num1)}\``)
    .setColor("#23d2ef")
    .setTimestamp()

  message.channel.send({ embeds: [cbrtEmbed] });
}
