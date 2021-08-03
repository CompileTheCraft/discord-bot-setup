// Normal commands
import help from './commands/help.js';
import gif from './commands/gif.js';
import privacy from './commands/privacy.js';
import mention from './commands/mention.js';
import invite from './commands/invite.js';
import roblox from './commands/roblox.js';
import roast from './commands/roast.js';
import random from './commands/random.js';
import serverInfo from './commands/server.js';
import wiki from './commands/wiki.js';
import ping from './commands/ping.js';
import massdm from './commands/massdm.js';
import vote from './commands/vote.js';
import message from './commands/message.js';
import embed from './commands/embed.js';

// Guild
import ban from './guild/ban.js';
import unban from './guild/unban.js';
import kick from './guild/kick.js';
import warn from './guild/warn.js';
import del from './guild/delete.js';

// Math
import add from './math/add.js';
import subtract from './math/subtract.js';
import multiply from './math/multiply.js';
import divide from './math/divide.js';
import sqrt from './math/sqrt.js';
import square from './math/square.js';
import cube from './math/cube.js';
import power from './math/power.js';
import perimeter from './math/perimeter.js';

// Music
import song from './music/song.js';

const commands = { help, gif, mention, song, add, subtract, multiply, divide, sqrt, square, cube, power, privacy, invite, roblox, roast, ban, unban, kick, warn, del, random, serverInfo, wiki, ping, massdm, vote, message, embed, perimeter };

async function commandHandler(msg) {
  let tokens = msg.content.split(' ');
  let command = tokens.shift();
  if (command.charAt(0) === '$') {
    command = command.substring(1);
    console.log(`${command} is running...`);
    msg.react("👍");
    commands[command](msg, tokens);
    msg.react("✅");
  }

  const forbiddenWords = [
    "fuck",
    "fck",
    "fuk",
    "motherfucker",
    "m0th3rfuck3r",
    "mf",
    "arey",
    "nigg",
    "cunt",
    "cnut",
    "bitch",
    "b!tch",
    "b1tch",
    "dick",
    "d!ck",
    "d1ck",
    "blowjob",
    "cock",
    "c0ck",
    "gay",
    "lesbian",
    "penis",
    "sex",
    "s3x",
    "porn",
    "p0rn"
  ];

  for (var i = 0; i < forbiddenWords.length; i++) {
    if (msg.content.includes(forbiddenWords[i])) {
      if(msg.member.hasPermission(["ADMINISTRATOR", "MANAGE_GUILDS", "PRIORITY_SPEAKER"])) return;
      
      msg.delete()
      msg.channel.send(`${msg.author} has been warned for using inappropriate language.`)
      msg.author.send(`You have used inappropriate language and violated the rules. in ${msg.guild.name} If used often you will be kicked/banned from the server.`);
    }
  }
};

export default commandHandler;