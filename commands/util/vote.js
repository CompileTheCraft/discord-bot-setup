module.exports = {
  name: 'vote',
  aliases: [],
  permissions: ['SEND_MESSAGES', 'MANAGE_GUILD'],
  cooldown: 30,
  description: 'this command lets the user have the topic and can have voting session in the guild.',
  async execute(message, args, cmd, client, Discord, profileData) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
      .setColor("#23d2ef")
      .setFooter(`Vote Conducted by: ${message.author.tag}`)
      .setTimestamp()

    const filter = member => member.author.id == message.author.id;

    try {
      message.channel.send("What is the vote topic?");
      let messageTimeOut = await message.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] });
      embed.setTitle(messageTimeOut.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send("You ran out of time, Re-run the command!. :x:");
    }

    try {
      message.channel.send("What is the First option to vote?");
      let messageTimeOut = await message.channel.awaitMessages({ filter, max: 1, time: 15000, errors: ['time'] });
      embed.addField(`[:red_circle:] The First option to vote: `, messageTimeOut.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send("You ran out of time, Re-run the command!. :x:");
    }

    try {
      message.channel.send("What is the Second option to vote?");
      let messageTimeOut = await message.channel.awaitMessages({ filter, max: 1, time: 15000, error: ['time'] });
      embed.addField(`[:blue_circle:] The Second option to vote: `, messageTimeOut.first().content);
    } catch (err) {
      console.log(err);
      message.channel.send("You ran out of time, Re-run the command!. :x:");
    }

    message.channel.send({ embeds: [embed] }).then(sentMessage => {
      sentMessage.react('🔴');
      sentMessage.react('🔵');
    });
  }
}
