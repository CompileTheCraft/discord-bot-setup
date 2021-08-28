const profileModel = require('../../models/profileSchema');

module.exports = async (client, Discord, member) => {

  if (member.user.bot) {
    console.log("Profile not created for bot!");
  } else {
    let profile = await profileModel.create({
      userID: member.id,
      serverID: member.guild.id,
      coins: 1000,
      bank: 0
    });
    profile.save();
  }
}