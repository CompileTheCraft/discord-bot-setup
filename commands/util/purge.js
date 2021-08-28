module.exports = {
  name: 'purge',
  aliases: ['pur', 'pg', 'clean'],
  cooldown: 10,
  permissions: ['MANAGE_CHANNELS', 'MANAGE_GUILD', 'ADMINISTRATOR'],
  description: 'Deletes messages accordingly with the limits set by discord itself',
  async execute(message, args, cmd, client, Discord) {
    if (!args[0]) return message.reply('Please enter the amount of messages you want to clear!. :x:');
    if (isNaN(args[0])) return message.reply('Please enter the value in digits!. :x:');

    if (args[0] > 100) return message.reply('You cannot delete more than 100 messages!. :x:');
    if (args[0] < 1) return message.reply('You must at least delete 1 message!. :x:');

    await message.channel.messages.fetch({ limit: args[0] }).then((messages) => {
      message.channel.bulkDelete(messages);
    });
  },
};
