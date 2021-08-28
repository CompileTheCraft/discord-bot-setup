const profileModel = require('../../models/profileSchema');

module.exports = {
  name: 'work',
  aliases: ['wk'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 3600,
  desctiption: 'this command lets you work as a temporary job and earn money.',
  async execute(message, args, cmd, client, Discord, profileData) {
    if (!profileData) return message.channel.send("You don't have a profile yet!. :x:");

    const jobs = [
      "police",
      "software engineer",
      "bus driver",
      "youtuber",
      "doctor",
      "lawyer",
      "postman",
      "judge",
      "security",
      "minecrafter",
      "teacher",
      "principal",
      "firefighter",
      "actor",
      "scientist",
      "director",
      "engineer",
      "instagramer",
      "tiktoker",
      "soldier"
    ];

    const randomJob = Math.floor(Math.random() * jobs.length);
    const randomSalary = Math.floor(Math.random() * 40000) + 1000;

    try {
      await profileModel.findOneAndUpdate({
        userID: message.author.id,
      }, {
        $inc: {
          coins: randomSalary,
        }
      }
      );

      message.channel.send(`You worked as ${randomJob} and earned ${randomSalary}`);
    } catch (err) {
      console.log(err);
      message.channel.send("There was an error while you were working.");
    }
  }
}