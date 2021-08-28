const profileModel = require('../../models/profileSchema');

module.exports = {
  name: 'daily',
  aliases: ['dl'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 86400,
  description: "this command gives money daily!.",
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!profileData) return message.channel.send("You did not create a profile!. :x:");

    const dailyAmount = Math.floor(Math.random() * 15000) + 10000;

    try {
      await profileModel.findOneAndUpdate({
        userID: message.author.id,
      }, {
        $inc: {
          coins: dailyAmount,
        }
      }
      );

      const embed = new Discord.MessageEmbed()
        .setColor("#23d2ef")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("Your daily money")
        .setDescription(`**${dailyAmount}** coins were placed in your wallet. \n Now your coins balance is **${profileData.coins}**`)
        .setTimestamp()

      message.channel.send({ embeds: [embed] });
    } catch (err) {
      console.log(err);
    }
  }
}
