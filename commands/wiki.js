import Discord from 'discord.js';
import fetch from 'node-fetch';
const embed = new Discord.MessageEmbed();

async function wiki(msg, args) {
  let query = args.join(" ");

  if (!query) return msg.channel.send("Please provide a valid query.");
  const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

  let response;
  try {
    response = await fetch(url).then(res => res.json());
  } catch (err) {
    console.log(err);
    msg.channel.send("An error occurred while searching for your query.");
  }

  try {
    if (response.type === "disambiguation") {
      embed.setTitle("Click on me for visiting the result page!")
      embed.setColor("#ad91ff")
      embed.setURL(response.content_urls.desktop.page)
      embed.setDescription([`${response.extract} Links for Topic you searched [Link](${response.content_urls.desktop.page}).`])
      embed.setTimestamp()

      msg.channel.send(embed);
    }
    else {
      embed.setTitle("Click on me for visiting the result page!")
      embed.setThumbnail(response.thumbnail_source)
      embed.setURL(response.content_urls.desktop.page)
      embed.setColor("#ad91ff")
      embed.setDescription(response.extract)
      embed.setTimestamp()

      msg.channel.send(embed);
    }
  } catch (err) {
    console.log(err);
    return msg.channel.send("Provide a valid query to search.");
  }
};

export default wiki;