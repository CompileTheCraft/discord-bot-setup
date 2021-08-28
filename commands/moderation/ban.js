module.exports = {
  name: 'ban',
  aliases: ['b'],
  cooldown: 10,
  permissions: ['BAN_MEMBERS', 'ADMINISTRATOR'],
  description: 'checks for permissions and bans the person mentioned!.',
  execute(message, args, cmd, client, Discord) {
    const mentionedMember = message.mentions.users.first();
    const reason = args.join(' ');

    if (!mentionedMember) return message.channel.send('You did not mention anyone to ban!. :x:');
    if (!reason) return;
    if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.reply("I don't have the correct permissions to run this command, check the permissions list of mine!. :x:");

    const memberTarget = message.guild.members.cache.get(mentionedMember.id);

    memberTarget.ban();

    let bannedEmbed = new Discord.MessageEmbed()
      .setColor('#23d2ef')
      .setTitle(`<@${memberTarget.user.id}> has been banned from ${message.guild.name}`)
      .setDescription(`**Reason**: ${reason}`)
      .setFooter(`Banned by moderator: ${message.author.tag}`)
      .setAuthor(`<@${memberTarget.user.id}>`, mentionedMember.displayAvatarURL)
      .setTimestamp();

    message.channel.send({ embeds: [bannedEmbed] });
  },
};
