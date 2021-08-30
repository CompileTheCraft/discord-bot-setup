const profileModel = require("../../models/profileSchema");

module.exports = {
  name: "balance",
  aliases: ['bal', 'bl'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  description: 'this command shows the balance of the person',
  async execute(message, args, cmd, client, Discord, profileData) {
    const mentionedMember = message.mentions.users.first();

    try {
      if (mentionedMember) {
        const mentionedMemberId = message.guild.members.cache.get(mentionedMember.id);
        const mentionedMemberData = await profileModel.findOne({ userID: mentionedMemberId });

        if (!mentionedMember) return message.channel.send("That member doesn't exist in this server!. :x:");
        if (!mentionedMemberData) return message.channel.send("The user mentioned doesn't have a profile yet!. :x:");

        const mentionedMemberEmbed = new Discord.MessageEmbed()
          .setColor("#23d2ef")
          .setAuthor(mentionedMember.user.tag, mentionedMember.user.displayAvatarURL({ dynamic: true }))
          .setTitle(`Your balance`)
          .setDescription(`**Coins** ${mentionedMemberData.coins} \n **Bank:** ${mentionedMemberData.bank}`)
          .setTimestamp()

        message.channel.send({ embeds: [mentionedMemberEmbed] });
      } else {
        const embed = new Discord.MessageEmbed()
          .setColor('#23d2ef')
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setTitle(`Your balance`)
          .setDescription(`**Coins:** ${profileData.coins} \n **Bank:** ${profileData.bank}`)
          .setTimestamp()

        message.channel.send({ embeds: [embed] });
      }
    } catch (err) {
      console.log(err);
      message.channel.send("There was an error executing this command!. :x:");
    }
  }
}
