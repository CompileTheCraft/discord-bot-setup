const profileModel = require("../../models/profileSchema");

module.exports = {
  name: 'deposit',
  aliases: ['dep'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 5,
  description: 'this command lets you deposit the amount of money in the bank',
  async execute(message, args, cmd, client, Discord, profileData) {
    const depAmount = args[0];
    if (depAmount % 1 != 0 || depAmount <= 0) return message.channel.send('Deposit amount must be whole number!. :x:');

    try {
      if (depAmount > profileData.coins) return message.channel.send(`You don't have that amount of coins to deposit!. Your coins balance is **${profileData.coins}**`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id
        }, {
        $inc: {
          coins: -depAmount,
          bank: depAmount
        }
      }
      );

      return message.reply(`Successfully, deposited **${depAmount}** coins to your bank.`);
    } catch (err) {
      console.log(err);
    }
  }
}