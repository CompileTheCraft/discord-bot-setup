import Discord from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const client = new Discord.Client();

const prefix = "!pr";

client.once("ready", () => {
  console.log(`${client.user.tag} is online.`);
});

client.on("message", (message) => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === "ping") {
    message.channel.send('pong!');
  }
});

client.login(process.env.BOTTOKEN);