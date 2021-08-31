module.exports = {
  name: 'add',
  aliases: ['subtract', 'multiply', 'power', 'divide'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 5,
  desctiption: 'this command will perform mathematical problems.',
  execute(message, args, cmd, client, Discord, profileData) {
    if (args.length >= 3) return message.channel.send("Only two values can be provided `$[operation] <num1> <num2>");

    var num1 = parseFloat(args[0]);
    var num2 = parseFloat(args[1]);

    if (cmd === "subtract") {
      subtract(message, num1, num2, Discord);
    } else if (cmd === "multiply") {
      multiply(message, num1, num2, Discord)
    } else if (cmd === "divide") {
      divide(message, num1, num2, Discord);
    } else if (cmd === "power") {
      power(message, num1, num2, Discord);
    } else {
      const addEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("The answer is...")
        .setDescription(`\`${num1 + num2}\``)
        .setColor("#23d2ef")
        .setTimestamp()

      message.channel.send({ embeds: [addEmbed] });
    }
  }
}

function subtract(message, num1, num2, Discord) {
  const subtractEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle("The answer is...")
    .setDescription(`\`${num1 - num2}\``)
    .setColor("#23d2ef")
    .setTimestamp()

  message.channel.send({ embeds: [subtractEmbed] });
}

function multiply(message, num1, num2, Discord) {
  const multiplyEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle("The answer is...")
    .setDescription(`\`${num1 * num2}\``)
    .setColor("#23d2ef")
    .setTimestamp()

  message.channel.send({ embeds: [multiplyEmbed] });
}

function divide(message, num1, num2, Discord) {
  const divideEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle("The answer is...")
    .setDescription(`\`${num1 / num2}\``)
    .setColor("#23d2ef")
    .setTimestamp()

  message.channel.send({ embeds: [divideEmbed] });
}

function power(message, num1, num2, Discord) {
  const powerEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setTitle("The answer is...")
    .setDescription(`\`${Math.pow(num1, num2)}\``)
    .setColor("#23d2ef")
    .setTimestamp()

  message.channel.send({ embeds: [powerEmbed] });
}
