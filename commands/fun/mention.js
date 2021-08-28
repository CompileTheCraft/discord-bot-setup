module.exports = {
  name: 'mention',
  aliases: [],
  permissions: ['SEND_MESSAGES', 'ADMINISTRATOR', 'MANAGE_GUILD'],
  cooldown: 60,
  desctiption: 'this command irritates the person mentioned',
  execute(message, args, cmd, client, Discord, profileData) {
    let mentionedMember = message.mentions.users.first();
    if (!mentionedMember) return msg.channel.send("You did not mention anyone.");

    const msgArray = [
      "Hello",
      "Are you eating pizza?",
      "WASSUP",
      "Facebook is going to die",
      "LOL",
      "come online duuudeeee"
    ];

    let ranMsgArray = Math.floor(Math.random() * msgArray.length);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);

    ranMsgArray = Math.floor(Math.random() * msgArray.length);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);

    ranMsgArray = Math.floor(Math.random() * msgArray.length);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
    message.channel.send(`${msgArray[ranMsgArray]} ${mentionedMember}`);
  }
}