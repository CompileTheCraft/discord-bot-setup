const profileModel = require("../../models/profileSchema");

module.exports = {
  name: 'search',
  aliases: ['srch'],
  permissions: ['SEND_MESSAGES'],
  cooldown: 300,
  description: "this command searches of the given location which might give you money or get caught.",
  async execute(message, args, cmd, client, Discord, profileData) {

    const searchLocations = [
      "car",
      "bathroom",
      "kitchen",
      "couch",
      "computer",
      "discord",
      "truck",
      "pocket",
      "bank",
      "neighbour's house",
      "shoes",
      "package.json",
      "vscode",
      "friend's wallet",
      "grocery store",
      "tree",
      "bushes",
      "github",
      "gitlab",
      "node_modules",
      "air",
      "dresser",
      "hospital",
      "pantry",
      "area51",
      "basement",
      "grass",
      "vacuum",
      "sewer",
      "attic",
      "mailbox",
      "coat",
      "sink",
      "dog",
      "bus",
      "crawlspace",
      "dumpster",
      "van",
      "park",
      "purse",
      "uber",
      "bed",
      "street"
    ];

    const chosenLocation = searchLocations.sort(() => Math.random() - Math.random()).slice(0, 3);
    const filter = ({ author, content }) => message.author == author && chosenLocation.some((location) => location.toLowerCase() == content.toLowerCase());

    const collector = message.channel.createMessageCollector(filter, { max: 1, time: 25000 });
    const earnings = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

    collector.on('collect', async (m) => {
      const coolEmbed = new Discord.MessageEmbed()
        .setColor("#23d2ef")
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setTitle(`You searched and found!`)
        .setDescription(`**You earned:** ${earnings} coins!`)
        .setTimestamp()

      message.channel.send({ embeds: [coolEmbed] });
      await profileModel.findOneAndUpdate({
        userID: message.author.id
      }, {
        $inc: {
          coins: earnings,
        }
      }
      );
    });

    collector.on('end', (collected, reason) => {
      if (reason == "time") {
        message.channel.send('You ran out of time!. :x:');
      }
    });

    const embed = new Discord.MessageEmbed()
      .setColor("#23d2ef")
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setTitle("Pick a location")
      .setDescription(`**Choose One:** \`${chosenLocation.join('` `')}\``)
      .setTimestamp()

    message.channel.send({ embeds: [embed] });
  }
}
