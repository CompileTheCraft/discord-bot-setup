const Scraper = require('images-scraper');

const google = new Scraper({
  puppeteer: {
    headless: true
  }
})

module.exports = {
  name: "image",
  aliases: ['img', 'imsearch', 'imgs', 'images'],
  cooldown: 10,
  permissions: ["SEND_MESSAGES"],
  description: "this command sends an image to a discord text channel by searching it in google",
  async execute(message, args, cmd, client, Discord) {
    const image_query = args.join(" ");

    if (!image_query) return message.channel.send('Please enter an image name!. :x:');

    const image_results = await google.scrape(image_query, 1);
    message.channel.send(image_results[0].url);
  }
}