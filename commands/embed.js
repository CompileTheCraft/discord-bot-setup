import Discord from 'discord.js';
const embedDD = new Discord.MessageEmbed();

async function embed(msg, args) {
  const filter = member => member.author.id == msg.author.id;

  msg.channel.send("What will the title have for the embedD?");
  try {
    let msgTime = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    embedD.setTitle(msgTime.first().content);
  } catch (err) {
    console.log(err);
    msg.channel.send("You ran out of time, Re-run the command. :x:")
  }

  msg.channel.send("What will the description have for the embedD?");
  try {
    let msgTime = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    embedD.setDescription(msgTime.first().content);
  } catch (err) {
    console.log(err);
    msg.channel.send("You ran out of time, Re-run the command. :x:")
  }

  msg.channel.send("What will the footer have for the embedD?");
  try {
    let msgTime = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    embedD.setFooter(msgTime.first().content);
  } catch (err) {
    console.log(err);
    msg.channel.send("You ran out of time, Re-run the command. :x:")
  }

  msg.channel.send("What will the color be for the embedD?. `[Can send in hex, rgb, and color names like red, blue and so on...]`");
  try {
    let msgTime = await msg.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] });
    embedD.setColor(msgTime.first().content);
  } catch (err) {
    console.log(err);
    msg.channel.send("You ran out of time, Re-run the command. :x:")
  }

  msg.channel.send(embedD);
}

export default embed;