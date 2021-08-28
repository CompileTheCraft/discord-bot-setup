const profileModel = require('../../models/profileSchema');

module.exports = {
  name: "profile",
  aliases: ['pr', 'prof'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 5,
  description: "this command lets you view your profile or create an economy profile or see other users profile.",
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!profileData) return message.channel.send("Profile created!. Re-run the command to see your profile! `Earn Coins dude!`.");
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
          .setTitle("Your Profile")
          .addFields(
            { name: "General", value: `**Username:** ${mentionedMember.user.username} \n **Nickname:** ${mentionedMember.user.displayName} \n **Account Created:** ${mentionedMember.user.createdAt}` },
            { name: "Slasher Profile", value: `**Coins:** ${mentionedMemberData.coins} \n **Bank:** ${mentionedMemberData.bank}` },
          )
          .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp()

        message.channel.send({ embeds: [mentionedMemberEmbed] });
      } else {
        const authorEmbed = new Discord.MessageEmbed()
          .setColor("#23d2ef")
          .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
          .setTitle("Your Profile")
          .addFields(
            { name: "General", value: `**Username:** ${message.author.username} \n **Nickname:** ${message.author.displayName} \n **Account Created:** ${message.author.createdAt}` },
            { name: "Slasher Profile", value: `**Coins:** ${profileData.coins} \n **Bank:** ${profileData.bank}` },
          )
          .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
          .setTimestamp()

        message.channel.send({ embeds: [authorEmbed] });
      }
    } catch (err) {
      console.log(err);
      message.channel.send("There was an error executing this message!. :x:");
    }
  }
}
