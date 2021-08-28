const profileModel = require('../../models/profileSchema');

module.exports = {
  name: "give",
  aliases: [],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  description: "this command lets you give your money to other users.",
  async execute(message, args, cmd, client, Discord, profileData) {
    const giveAmount = args[1];
    const receiverUser = message.mentions.users.first();
    const receiverData = await profileModel.findOne({ userID: receiverUser.id });

    if (!receiverUser) return message.channel.send("That member doesn't exist in the server!. :x:");
    if (!receiverData) return message.channel.send("That member doesn't have a profile yet!. :x:");

    if (giveAmount % 1 != 0 || giveAmount <= 0) return message.channel.send('Amount to be given must be whole number!. :x:');

    try {
      if (giveAmount > profileData.coins) return message.channel.send(`You don't have that much amount of coins to give. Your coins balance is **${profileData.coins}**`);

      await profileModel.findOneAndUpdate({
        userID: receiverUser.id
      }, {
        $inc: {
          coins: giveAmount,
        },
      }
      );
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: -giveAmount,
        }
      }
      );

      return message.reply(`Successfully, this member has been given you coins, the member's coins balance is **${receiverData.coins}**, after the transaction your coins balance is **${profileData.coins}**`);
    } catch (err) {
      console.log(err);
    }
  }
}
