import Discord from 'discord.js';
const client = new Discord.Client();

function ping(msg, args) {
  msg.channel.send("Checking Connection...");
  msg.channel.send("Connection Secured").then(resultMsg => {
    const ping = resultMsg.createdTimestamp - msg.createdTimestamp;

    resultMsg.edit(`Bot Ping: \`${ping}ms\``);
  })
}

export default ping;