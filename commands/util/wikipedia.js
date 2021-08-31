const fetch = require("node-fetch");

module.exports = {
  name: 'wikipedia',
  aliases: ['wiki', 'wp'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  description: 'this command shows the search results from wikipedia.',
  async execute(message, args, cmd, client, Discord, profileData) {
    let query = args.join(" ");

    if (!query) return message.channel.send("Please provide a valid query. :x:");
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`;

    let response;
    try {
      response = await fetch(url).then(res => res.json());
    } catch (err) {
      console.log(err);
      message.channel.send("An error occurred while searching for your query.");
    }

    try {
      if (response.type === "diambiguation") {
        const embed = new Discord.MessageEmbed()
          .setAuthor("Wikipedia", 'https://imgr.search.brave.com/n5sAVV3slSTrwFxwLJ8xTf8UIpvFfGzHzQLeOUJKT8k/fit/640/360/no/1/aHR0cHM6Ly9uZXdh/Z29yYS5jYS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wOC9X/aWtpcGVkaWEtTG9n/by1vbi1CbGFjay5q/cGc')
          .setTitle("Click on me for visiting the result page!")
          .setColor("#23d2ef")
          .setURL(response.content_urls.desktop.page)
          .setDescription([`${response.extract} Links for Topic you searched [Link](${response.content_urls.desktop.page}).`])
          .setTimestamp()

        message.channel.send({ embeds: [embed] });
      } else {
        const otherEmbed = new Discord.MessageEmbed()
          .setAuthor("Wikipedia", 'https://imgr.search.brave.com/n5sAVV3slSTrwFxwLJ8xTf8UIpvFfGzHzQLeOUJKT8k/fit/640/360/no/1/aHR0cHM6Ly9uZXdh/Z29yYS5jYS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wOC9X/aWtpcGVkaWEtTG9n/by1vbi1CbGFjay5q/cGc')
          .setTitle("Click on me for visiting the result page!")
          .setColor("#23d2ef")
          .setURL(response.content_urls.desktop.page)
          .setDescription(response.extract)
          .setTimestamp()

        message.channel.send({ embeds: [otherEmbed] });
      }
    } catch (err) {
      console.log(err)
      return message.channel.send("Provide a valid query to search. :x:");
    }
  }
}
