module.exports = {
  name: 'suggestions',
  aliases: ['suggest', 'suggestion'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  description: 'this command sends a suggestion',
  execute(message, args, cmd, client, Discord) {
    const channel = message.guild.channels.cache.find(c => c.name === 'suggestions');
    if (!channel) return message.channel.send("`suggestions` channel doesn't exist!. :x:");

    let messageArgs = args.join(" ");

    const embed = new Discord.MessageEmbed()
      .setColor('#23d2ef')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(`Suggestion: ${messageArgs}`)

    channel.send({ embeds: [embed] }).then((msg) => {
      msg.react('👍');
      msg.react('👎');
      message.delete();
    }).catch((err) => {
      throw err;
    })
  }
}
