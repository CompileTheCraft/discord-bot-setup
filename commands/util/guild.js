module.exports = {
  name: 'guild',
  aliases: ['gInfo'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  desctiption: 'this command shos the information about the guild.',
  execute(message, args, cmd, client, Discord, profileData) {
    let { guild } = message;

    const embed = new Discord.MessageEmbed()
      .setAuthor(guild.name, guild.iconURL({ dynamic: true }))
      .setTitle(`Guild Info of ${guild.name}`)
      .addFields(
        { name: "Guild Name: ", value: ` ${guild.name}`, inline: true },
        { name: "Guild Description: ", value: ` ${guild.description}`, inline: true },
        { name: "Guild created at: ", value: ` ${guild.createdAt}`, inline: true },
        { name: "No.of members in guild: ", value: ` ${guild.memberCount}`, inline: true },
        { name: "Maximum no.of members that can join this guild: : ", value: ` ${guild.maximumMembers}`, inline: true },
        { name: "Guild Owner: ", value: ` <@${guild.ownerId}>`, inline: true },
        { name: "No.of times the guild was boosted: ", value: ` ${guild.premiumSubscriptionCount}`, inline: true },
        { name: "Guild level: ", value: ` ${guild.premiumTier}`, inline: true },
        { name: "Guild preferred language: ", value: ` ${guild.preferredLocale}`, inline: true },
        { name: "No.of channels in the guild: ", value: ` ${guild.channels.cache.size}`, inline: true },
        { name: "No.of roles in the guild: ", value: ` ${guild.roles.cache.size}`, inline: true },
        { name: "No.of emojis in the guild: ", value: ` ${guild.emojis.cache.size}`, inline: true },
        { name: "No.of stickers in the guild: ", value: ` ${guild.stickers.cache.size}`, inline: true },
        { name: "Verification Level of the guild: ", value: ` ${guild.verificationLevel}`, inline: true },
        { name: "When I joined this guild: ", value: ` ${guild.joinedAt}`, inline: true },
        { name: "Is the guild large: ", value: ` ${guild.large}`, inline: true },
        { name: "Guild's Default Message Notifications: ", value: ` ${guild.defaultMessageNotifications}`, inline: true }
      )
      .setColor("#23d2ef")
      .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

    message.channel.send({ embeds: [embed] });
  }
}
