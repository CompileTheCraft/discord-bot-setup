import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();
import fetch from 'node-fetch';

async function gif(msg, args) {
  let keywords = 'exciting';
  if (args.length > 0) {
    keywords = args.join(' ');
  }
  let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
  let response = await fetch(url);
  let json = await response.json();
  const index = Math.floor(Math.random() * json.results.length);
  embed.setTitle(`Topic searched is: ${keywords}`)
  embed.setDescription("Gif obtained by Tenor and their dev api.")
  embed.setColor("#ad91ff")
  embed.setTimestamp()
  msg.channel.send(embed);
  msg.channel.send(json.results[index].url);
};

export default gif;