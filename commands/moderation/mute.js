const ms = require('ms');

module.exports = {
  name: 'mute',
  aliases: ['m'],
  cooldown: 10,
  permissions: ['MUTE_MEMBERS', 'ADMINISTRATOR'],
  description: 'checks for permissions and mutes the person mentioned for particular time!.',
  execute(message, args, cmd, client, Discord) {
    const mentionedMember = message.mentions.users.first();

    if (!mentionedMember) return message.channel.send('You did not mention anyone to mute!. :x:');
    if (!message.guild.me.hasPermission('MUTE_MEMBERS')) return message.reply("I don't have the correct permissions to run this command, check the permissions list of mine!. :x:");

    let mainRole = message.guild.roles.cache.find((role) => role.name === 'Supporters and fans');
    let muteRole = message.guild.roles.cache.find((role) => role.name === 'Muted');

    let memberTarget = message.guild.members.cache.get(mentionedMember.id);

    if (!args[1]) {
      memberTarget.roles.remove(mainRole.id);
      memberTarget.roles.add(muteRole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been muted`);
      return;
    }

    memberTarget.roles.remove(mainRole.id);
    memberTarget.roles.add(muteRole.id);
    message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

    setTimeout(function () {
      memberTarget.roles.remove(muteRole.id);
      memberTarget.roles.add(mainRole.id);
      message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
    }, ms(args[1]));
  },
};
