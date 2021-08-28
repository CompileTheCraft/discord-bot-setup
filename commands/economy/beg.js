const profileModel = require('../../models/profileSchema');

module.exports = {
  name: "beg",
  aliases: ['bg'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 300,
  description: 'ask others for money',
  async execute(message, args, cmd, client, Discord, profileData) {
    const randomNumber = Math.floor(Math.random() * 500) + 1;
    const response = await profileModel.findOneAndUpdate({
      userID: message.author.id,
    }, {
      $inc: {
        coins: randomNumber,
      }
    });
    const embed = new Discord.MessageEmbed()
      .setColor('#23d2ef')
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle("You begged and received")
      .setDescription(`**Coins received:** ${randomNumber}`)
      .setTimestamp()

    return message.channel.send({ embeds: [embed] });
  }
}
