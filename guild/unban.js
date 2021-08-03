import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

async function unban(msg, args) {
  // Permission checking:
  if(!msg.member.hasPermission("UNBAN_MEMBERS")) return msg.channel.send("You do not have permission to run this command. :x:");
  if(!msg.guild.me.hasPermission("UNBAN_MEMBERS")) return msg.channel.send("I do not have permission to run this command. Please check the permissions. :x:");

  // Variables:
  const reason = args.join(" ");
  const mentionedMember = msg.mentions.members.first();
  let userID = args[0];

  // Input Checking:
  if(!reason) reason = "No reason given";
  if(!args[0]) return msg.channel.send("You must state someone to unban. \`$unban ID reason\`. :x:");
  if(!isNan(args[0])) return msg.channel.send("The ID stated is not a number. \`$unban ID reason\`. :x:");

  // Executing:
  msg.guild.fetchBans().then(async bans => {
    if(bans.size == 0) return msg.channe.send("This server does not have anyone banned. :x:");
    let bannedUser = bans.find(b => b.user.id == userID);
    if(!bannedUser) return msg.channel.send('The user ID stated is not banned. :x:');
    await msg.guild.members.unban(bannedUser.user, reason).catch(err => {
      console.log(err);
      return msg.channel.send("Something went wrong unbanning the id.");
    }).then(() => {
      msg.channel.send(`Successfully Unbanned ${args[0]}`);
    })
  })
}

export default unban;