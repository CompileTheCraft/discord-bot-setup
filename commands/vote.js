import Discord from 'discord.js';

async function vote(msg, args) {
  let embed = new Discord.MessageEmbed();
  embed.setFooter(`Vote made by ${msg.author.tag}`)
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  const filter = member => member.author.id == msg.author.id;

  msg.channel.send("What is the vote topic?");
  try {
    let msgTime = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    embed.setTitle(msgTime.first().content);
  } catch (err) {
    console.log(err);
    msg.channel.send("You ran out of time, Re-run the command. :x:");
  }

  msg.channel.send("What is the first option to vote?");
  try {
    let msgTime = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    embed.addField(`[:red_circle:] The First option to vote: `, msgTime.first().content);
  } catch (err) {
    console.log(err);
    msg.channel.send("You ran out of time, Re-run the command. :x:");
  }

  msg.channel.send("What is the second option to vote?");
  try {
    let msgTime = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    embed.addField(`[:blue_circle:] The Second option to vote: `, msgTime.first().content);
  } catch (err) {
    console.log(err);
    msg.channel.send("You ran out of time, Re-run the command. :x:");
  }
  msg.channel.send(embed).then(sentMessage => sentMessage.react('🔴')).then(reaction => reaction.msg.react('🔵'));
}

export default vote;