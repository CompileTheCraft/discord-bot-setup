import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function invite(msg, args) {
  embed.setTitle("Join our Official Server");
  embed.setURL("https://discord.gg/6BqupHBtVe")
  embed.setDescription("Join this server to enjoy, and discover cool things. Invite our bot to your server by clicking this link: https://devmate20.glitch.me")
  embed.setColor("#ad91ff")
  embed.setFooter("By Creators of Slasher")
  embed.setTimestamp()

  msg.author.send(embed);
}


export default invite;