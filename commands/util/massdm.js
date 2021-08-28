module.exports = {
  name: 'massdm',
  aliases: ['md'],
  permissions: ['SEND_MESSAGES', 'MANAGE_GUILD', 'ADMINISTRATOR'],
  cooldown: 10,
  description: 'this command sends message to everyone in the guild',
  async execute(message, args, cmd, client, Discord, profileData) {
    const arguments = args.join(" ");
    message.delete();

    try {
      await message.guild.members.cache.forEach(member => {
        if (member.user.bot) return;

        member.send(`**${arguments}.** \nsent by ${message.author.tag} in \`${message.guild.name}\``);
      })
    } catch (err) {
      console.log(err);
      message.channel.send("An error ouccured while sending message to everyone in the guild!. :")
    }
  }
}
