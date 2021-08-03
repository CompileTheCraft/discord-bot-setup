import Discord from 'discord.js';

async function massdm(msg, args) {
  if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You don't have the correct permissions to run this command. :x:");
  const argus = args.join(" ");

  await msg.guild.members.cache.forEach(member => {
    member.send(`${argus}. sent by ${msg.author} in \`${msg.guild.name}\``);
    });
}

export default massdm;