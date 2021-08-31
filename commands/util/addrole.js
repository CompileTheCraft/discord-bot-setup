module.exports = {
  name: 'addrole',
  aliases: ['ar', 'addr'],
  permissions: ['SEND_MESSAGES', 'MANAGE_GUILD', 'ADMINISTRATOR'],
  cooldown: 10,
  description: 'this command adds role to the member',
  async execute(message, args, cmd, client, Discord, profileData) {
    const mentionedMember = message.mentions.users.first();
    const mentionedMemberId = message.guild.members.cache.get(mentionedMember.id);
    const role = message.mentions.roles.first();

    if (!mentionedMember) return message.channel.send("That member doesn't exist in the server!. :x:");

    try {
      await mentionedMemberId.roles.add(role);
      message.channel.send(`Succesfully added the @${role} to ${mentionedMember.user.username}`);
    } catch (err) {
      console.log(err);
      message.channel.send("An error occured when adding the role to the member! :x:");
    }
  }
}