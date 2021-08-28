require("dotenv").config();

module.exports = {
  name: 'help',
  aliases: [],
  permissions: ['SEND_MESSAGES'],
  cooldown: 10,
  desctiption: 'this command shows the list of all commands!.',
  execute(message, args, cmd, client, Discord, profileData) {

    try {
      if (args[0] === "fun") {
        fun(message, client, Discord);
      } else if (args[0] === "moderation") {
        moderation(message, client, Discord);
      } else if (args[0] === "util") {
        util(message, client, Discord)
      } else if (args[0] === "economy") {
        economy(message, client, Discord)
      } else {
          const defaultEmbed = new Discord.MessageEmbed()
            .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
            .setColor("#23d2ef")
            .setTitle("Help Commands!")
            .setDescription(`**Prefix:** ${process.env.PREFIX}. Here all the commands according to their categories. Type ${process.env.PREFIX}help <category>`)
            .addFields(
              { name: "**Category:** Fun[fun]", value: "some fun commands for you to play with and roast some people ig!." },
              { name: "**Category:** Moderation[moderation]", value: "this category is useful for mods, mods can kick/ban/warn people!." },
              { name: "**Category:** Utility[util]", value: "this category has so many commands that is used in your day-to-day life!." },
              { name: "**Caetgory:** Economy[economy]", value: "this category has many commands to earn coins!." },
            )
            .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

          message.channel.send({ embeds: [defaultEmbed] });
      }
    } catch (err) {
      console.log(err);
      message.channel.send("There was an error while showing the list of commands!. :x:");
    }
  }
}

function fun(message, client, Discord) {
  const funEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setColor("#23d2ef")
    .setTitle("Help Commands! | Category: Fun")
    .setDescription(`**Prefix:** ${process.env.PREFIX}. Here all the commands according to Fun category. Type ${process.env.PREFIX}help <category>`)
    .addFields(
      { name: `${process.env.PREFIX}giphy[gif] <query>`, value: "this command posts a random gif from the responses from the given query." },
      { name: `${process.env.PREFIX}mcserver[ms, mccheck, minecraft] <serverip> <port>`, value: "this command gets information about a minecraft server." },
      { name: `${process.env.PREFIX}mention <user>`, value: "this command mentions a person 15 times. `LOL, he is going to have a bad time!`" },
      { name: `${process.env.PREFIX}play[stop, skip, pause, resume] <song>`, value: "this command plays songs dude, lets enjoy!." },
    )
    .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()

  message.channel.send({ embeds: [funEmbed] });
}

function moderation(message, client, Discord) {
  const moderationEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setColor("#23d2ef")
    .setTitle("Help Commands! | Category: Moderation")
    .setDescription(`**Prefix:** ${process.env.PREFIX}. Here all the commands according to moderation category. Type ${process.env.PREFIX}help <category>`)
    .addFields(
      { name: `${process.env.PREFIX}ban <user> <reason>`, value: "this command checks for permissions and bans the person mentioned!." },
      { name: `${process.env.PREFIX}kick <user> <reason>`, value: "this command checks for permissions and kicks the person mentioned!." },
      { name: `${process.env.PREFIX}warn <user> <reason>`, value: "this command checks for permissions and warns the person mentioned!." },
    )
    .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()

  message.channel.send({ embeds: [moderationEmbed] });
}

function util(message, client, Discord) {
  const utilEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setColor("#23d2ef")
    .setTitle("Help Commands! | Category: Utility")
    .setDescription(`**Prefix:** ${process.env.PREFIX}. Here all the commands according to utility category. Type ${process.env.PREFIX}help <category>`)
    .addFields(
      { name: `${process.env.PREFIX}add[subtract, mulitply, divide, square, cube, sqrt, cbrt, power]` },
      { name: `${process.env.PREFIX}guild[gInfo]`, value: "this command shows the information about the guild." },
      { name: `${process.env.PREFIX}image[img, imsearch, imgs, images] <query>`, value: "this command sends an image to a discord text channel by searching it in google." },
      { name: `${process.env.PREFIX}massdm[md] <message>`, value: "this command sends message to everyone in the guild" },
      { name: `${process.env.PREFIX}purge[pur, pg, clean] <number>`, value: "Deletes messages accordingly with the limits set by discord itself" },
      { name: `${process.env.PREFIX}suggestions[suggest, suggestion] <message>`, value: "this command sends a suggestion **Note: Only works when a channel is named:** `suggestions`" },
      { name: `${process.env.PREFIX}vote`, value: "this command lets the user have the topic and can have voting session in the guild." },
      { name: `${process.env.PREFIX}wikipedia[wiki, wp] <query>`, value: "this command shows the search results from wikipedia." },
    )
    .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()

  message.channel.send({ embeds: [utilEmbed] });
}

function economy(message, client, Discord) {
  const economyEmbed = new Discord.MessageEmbed()
    .setAuthor(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setColor("#23d2ef")
    .setTitle("Help Commands! | Category: Economy")
    .setDescription(`**Prefix:** ${process.env.PREFIX}. Here all the commands according to economy category. Type ${process.env.PREFIX}help <category>`)
    .addFields(
      { name: `${process.env.PREFIX}balance[bal, bl] <user/no mention>`, value: "this command shows the balance of the person" },
      { name: `${process.env.PREFIX}beg[bg]`, value: "ask others for money" },
      { name: `${process.env.PREFIX}daily[dl]`, value: "this command gives money daily!." },
      { name: `${process.env.PREFIX}deposite[dep]`, value: "this command lets you deposit the amount of money in the bank" },
      { name: `${process.env.PREFIX}give`, value: "this command lets you give your money to other users." },
      { name: `${process.env.PREFIX}profile[pr, prof]`, value: "this command lets you view your profile or create an economy profile or see other users profile." },
      { name: `${process.env.PREFIX}search[srch]`, value: "this command searches of the given location which might give you money or get caught." },
      { name: `${process.env.PREFIX}withdraw[with, wd, wdraw]`, value: "this command lets you withdraw the amount of money from the bank" },
      { name: `${process.env.PREFIX}work[wk]`, value: "this command lets you work as a temporary job and earn money." }
    )
  .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
  .setTimestamp()

  message.channel.send({ embeds: [economyEmbed] });
}
