function mention(msg, args) {
  let mentionedMember = args[0];
  if(!mentionedMember) return msg.channel.send("You did not mention anyone.");
  if(!msg.member.hasPermission("ADMINISTRATOR")) return msg.channel.send("You don't have the permissions to run this command. :x:");

  const msgArray = [
    "Hello",
    "Are you eating pizza?",
    "WASSUP",
    "Facebook is going to die",
    "LOL",
    "come online duuudeeee"
  ];
  const ranMsgArray = Math.floor(Math.random() * msgArray.length);

  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  msg.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
}

export default mention;