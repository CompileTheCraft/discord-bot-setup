import Discord from 'discord.js';
const client = new Discord.Client();
const embed = new Discord.MessageEmbed();
import dotenv from 'dotenv';
dotenv.config();

import commandHandler from './commands.js';
import keepAlive from './server.js';

client.on("ready", async () => {
  console.log(`${client.user.tag} is online 🟢`);

  const activities = [
    `Prefix = "$"`,
    `$help for list of commands!`,
    `Unprecedented Velocity. Impeccable Reliability`,
    `${client.guilds.cache.size} servers!`,
    `${client.channels.cache.size} channels!`,
    `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users!`,
    `Developers Heatwave Eli#0001 and JUSTMRBHD#0001`,
  ]

  let i = 0;
  setInterval(() => client.user.setActivity(activities[i++ % activities.length], { type: 'WATCHING' }), 15000);
});

client.on("message", commandHandler);

client.on("guildCreate", (guild) => {
  let defaultChannel = "";
  guild.channels.cache.forEach((channel) => {
    if(channel.type == "text" && defaultChannel == "") {
      if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
        defaultChannel = channel;
      }
    }
  })
  defaultChannel.send(`Hello, I'm ${client.user}. Thanks for inviting me, here is our Arbalistic Inc \**Privacy Policy:\**`)
  embed.setTitle("Privacy Policy")
  embed.setDescription("Privacy is valuable. We love our customers and we want all the information regarding them private. At Arbalistic we value privacy the most. Our bot does not see your messages. It doesn't hear your calls. At discord, our bot ranked first in terms of privacy. Your information doesn't come to our servers, it is only on your logged-in device/devices. Everything is end-to-end encrypted and there is no way we know which data is coming from which server. During these online times, privacy is a rare thing. So we here want your data to only be yours and shared only if you want to. This is our privacy. We designed our bot based on privacy. It is hard but it matters.")
  embed.setColor("#ad91ff")
  embed.setFooter("To know more, please type \`$help\`")
  embed.setTimestamp()
  defaultChannel.send(embed)
});

keepAlive();
client.login(process.env.BOTTOKEN);