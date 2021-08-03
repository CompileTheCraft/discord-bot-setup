import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function help(msg, args) {
  if(!args[0]) {
    msg.channel.send("Fetching commands...");
    embed.setTitle("Slasher")
    embed.setDescription("\`Prefix:\` \**$\**, $help [category].")
    embed.addFields(
    { name: "\**Fun Commands category:[fun]\**", value: "fun commands to enjoy." },
    { name: "\**MOD Commands category:[moderation]\**", value: "commands to control the server" },
    { name: "\**Math category:[math]\**", value: "To perform arithmetical operations" },
    { name: "\**Music category:[music]\**", value: "to dance... maybe" },
    )
    embed.setColor("#ad91ff")
    embed.setTimestamp()

    msg.channel.send(embed);
  }

  if(args[0] == "fun") {
    msg.channel.send("Fetching commands...");
    embed.setTitle("Slasher")
    embed.setDescription("\`Prefix:\` \**$\**, $help for list of commands that you can try out$. Your now viewing commands for Category: Fun")
    embed.addFields(
      { name: "\`$gif <query>\`: ", value: "Posts random gif which relate to the query you have given." },
      { name: "\`$roast <@user>\`: ", value: "Mentions the user you have given and roasts him. \`LOL\`" },
    )
    embed.setColor("#ad91ff")
    embed.setTimestamp()

    msg.channel.send(embed);
  }

  if(args[0] == "utility") {
    msg.channel.send("Fetching commands...");
    embed.setTitle("Slasher")
    embed.setDescription("\`Prefix:\` \**$\**, $help for list of commands that you can try out$. Your now viewing commands for Category: Utility")
    embed.addFields(
      { name: "\`$invite\`: ", value: "DM's you and invites you to its official server" },
      { name: "\`$privacy\`: ", value: "Shows our privacy policy." },
      { name: "\`$random <args1> <args2> <args3> <args4> <args5> <args6>\`", value: "Chooses a random argument you entered." },
      { name: "\`$mention <@user>\`:", value: "It mentions a person multiple times." },
      { name: "\`$serverInfo\`", value: "Shows different information of the current server." },
      { name: "\`$wiki <query>\`", value: "Searches for query in wikipedia and shows the results." },
    )
    embed.setColor("#ad91ff")
    embed.setTimestamp()

    msg.channel.send(embed);
  }

  if(args[0] == "moderation") {
    msg.channel.send("Fetching commands...");
    embed.setTitle("Slasher")
    embed.setDescription("\`Prefix:\` \**$\**, $help for list of commands that you can try out$. Your now viewing commands for Category: Moderation")
    embed.addFields(
      { name: "\`$kick <@user> <reason>\`", value: "Kicks the user mentioned." },
      { name: "\`$ban <@user> <reason>\`", value: "It bans a person from the server." },
      { name: "\`$unban <userID> <reason>\`", value: "Unbans a person who was previously banned in the server." },
      { name: "\`$warn <@user> <reason>\`", value: "You can warn a person who violates the rules." },
      { name: "\`$del <no.of Messages[Note:Max Messages is 100]>\`", value: "You can delete messages from a channel to make it look clean." },
      )
      embed.setColor("#ad91ff")
      embed.setTimestamp()

      msg.channel.send(embed);
  }

  if(args[0] == "math") {
    msg.channel.send("Fetching commands...");
    embed.setTitle("Slasher")
    embed.setDescription("\`Prefix:\` \**$\**, $help for list of commands that you can try out$. Your now viewing commands for Category: Math")
    embed.addFields(
      { name: "\`$add <num1> <num2>\`", value: "Adds two$more numbers." },
      { name: "\`$subtract <num1> <num2>\`", value: "Subtracts second value from the first" },
      { name: "\`$multiply <num1> <num2>\`", value: "Multiplies the values given." },
      { name: "\`$divide <num1> <num2>\`", value: "Divides two numbers" },
      { name: "\`$square <num>\`", value: "Squares the value given" },
      { name: "\`$cube <num>\`", value: "Finds the cube of a number" },
      { name: "\`$sqrt <num>\`", value: "Finds the square root if the value given." },
      { name: "\`$power <num> <power>\`", value: "Finds the power of a number" },
    )
    embed.setColor("#ad91ff")
    embed.setTimestamp()

    msg.channel.send(embed);
  }

  if(args[0] == "music") {
    msg.channel.send("Fetching commands...");
    embed.setTitle("Slasher")
    embed.setDescription("\`Prefix:\` \**$\**, $help for list of commands that you can try out$. Your now viewing commands for Category: Music")
    embed.addFields(
      { name: "\`$song play <query>\`", value: "Plays the song or adds the song to queue." },
      { name: "\`$song stop\`", value: "Stops the songs" },
      { name: "\`$song pause\`", value: "Pauses the songs" },
      { name: "\`$song resume\`", value: "Resumes a paused song" },
      { name: "\`$song skip\`", value: "Skips a song in queue" },
    )
    embed.setColor("#ad91ff")
    embed.setTimestamp()

    msg.channel.send(embed);
  }
};

export default help;