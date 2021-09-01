const profileModel = require("../../models/profileSchema");

module.exports = {
  name: 'withdraw',
  aliases: ['with', 'wd', 'wdraw'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 5,
  description: 'this command lets you withdraw the amount of money from the bank',
  async execute(message, args, cmd, client, Discord, profileData) {
    const withAmount = args[0];
    if (withAmount % 1 != 0 || withAmount <= 0) return message.channel.send('Withdraw amount must be whole number!. :x:');

    try {
      if (withAmount > profileData.bank) return message.channel.send(`You don't have that amount of coins in your bank to withdraw!. Your bank balance is **${profileData.bank}**`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id
        }, {
        $inc: {
          coins: withAmount,
          bank: -withAmount
        }
      }
      );

      return message.reply(`Successfully, withdrawed **${withAmount}** coins from your bank.`);
    } catch (err) {
      console.log(err);
    }
  }
}
