function del(msg, args) {
  // Checking for permission:
  if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You do not have the required permissions to run this command. :x:");
  if(!msg.guild.me.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("I do not have the required permissions to run this command. :x:");

  // Conditions:
  if(!args[0]) return msg.channel.send("You did not specify the amount of messages to be deleted. :x:");
  if(args[0] <= 1) return msg.channel.send("The minimum number of messages that can be deleted is 2, You exceded the limit. :x:");
  if(args[0] >= 101) return msg.channel.send("The maximum number of messages that can be deleted is 100, You exceded the limit. :x:");

  // Executing:
  try {
    msg.channel.bulkDelete(args[0]);
  } catch (err) {
    msg.channel.send("An error occurred while deleting the messages. Error: " + err);
    console.log(err);
  }

  msg.channel.send(`\**${args[0]}\** have been deleted from \**${msg.channel.name}\** channel.`).then(sentMessage => sentMessage.delete());
}

export default del;