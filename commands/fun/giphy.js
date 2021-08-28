const fetch = require("node-fetch");
require("dotenv").config();

module.exports = {
  name: 'giphy',
  aliases: ['gif'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  desctiption: 'this command posts a random gif from the responses from the give query.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let keywords = 'exciting';
    keywords = args.join(" ");

    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=high`;
    let response = await fetch(url);
    let json = await response.json();

    const index = Math.floor(Math.random() * json.results.length);

    const embed = new Discord.MessageEmbed()
      .setColor("#23d2ef")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle(`Topic searched: ${keywords}`)
      .setDescription("Gif obtained by tenor and their dev API")
      .setTimestamp()

    message.channel.send({ embeds: [embed] });
    message.channel.send(json.results[index].url);
  }
}
