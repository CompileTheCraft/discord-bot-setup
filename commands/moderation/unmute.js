module.exports = {
  name: 'unmute',
  aliases: ['unm', 'um', 'u'],
  cooldown: 10,
  permissions: ['MUTE_MEMBERS', 'ADMINISTRATOR'],
  description: 'checks for permissions and unmutes the person mentioned!.',
  execute(message, args, cmd, client, Discord) {
    const mentionedMember = message.mentions.users.first();

    if (!mentionedMember) return message.channel.send('You did not mention anyone to mute!. :x:');
    if (!message.guild.me.hasPermission('MUTE_MEMBERS')) return message.reply("I don't have the correct permissions to run this command, check the permissions list of mine!. :x:");

    let mainRole = message.guild.roles.cache.find((role) => role.name === 'Supporters and fans');
    let muteRole = message.guild.roles.cache.find((role) => role.name === 'Muted');

    let memberTarget = message.guild.members.cache.get(mentionedMember.id);

    memberTarget.roles.remove(muteRole.id);
    memberTarget.roles.add(mainRole.id);
    message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
  },
};
