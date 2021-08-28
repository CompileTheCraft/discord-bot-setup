const util = require('minecraft-server-util');

module.exports = {
  name: "mcserver",
  aliases: ['mc', 'mccheck', 'minecraft'],
  cooldown: 15,
  permissions: ['SEND_MESSAGES'],
  description: "this command gets information about a minecraft server",
  execute(message, args, cmd, client, Discord) {
    if (!args[0]) return message.channel.send('Please enter a minecraft server ip!. :x:');
    if (!args[1]) return message.channel.send('Please enter a minecraft server port!. :x:');

    util.status(args[0], { port: parseInt(args[1]) }).then(response => {
      const embed = new Discord.MessageEmbed()
        .setColor('#23d2ef')
        .setTitle('Minecraft server Status')
        .addFields(
          { name: 'Server IP', value: response.host },
          { name: 'Online Players', value: response.onlinePlayers },
          { name: 'Max Players', value: response.maxPlayers },
          { name: 'Version', value: response.version }
        )
        .setFooter(`Requested by ${message.author.tag}`)
        .setTimestamp()

      message.channel.send({ embeds: [embed] });
    }).catch((err) => {
      console.log(err);
      message.channel.send(`An error occurred while searching for the server's ip ${args[0]}`);
    });
  }
}
