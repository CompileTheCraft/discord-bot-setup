module.exports = {
  name: 'kick',
  aliases: ['k'],
  cooldown: 10,
  permissions: ['KICK_MEMBERS', 'ADMINISTRATOR'],
  description: 'checks for permissions and kicks the person mentioned!.',
  execute(message, args, cmd, client, Discord) {
    const mentionedMember = message.mentions.users.first();
    const reason = args.join(' ');

    if (!mentionedMember) return message.channel.send('You did not mention anyone to kick!. :x:');
    if (!reason) return;
    if (!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply("I don't have the correct permissions to run this command, check the permissions list of mine!. :x:");

    const memberTarget = message.guild.members.cache.get(mentionedMember.id);

    memberTarget.kick();

    let kickedEmbed = new Discord.MessageEmbed()
      .setColor('#23d2ef')
      .setTitle(`<@${memberTarget.user.id}> has been kicked from ${message.guild.name}`)
      .setDescription(`**Reason**: ${reason}`)
      .setFooter(`Kicked by moderator: ${message.author.tag}`)
      .setAuthor(`<@${memberTarget.user.id}>`, mentionedMember.displayAvatarURL)
      .setTimestamp();

    message.channel.send({ embeds: [kickedEmbed] });
  },
};
