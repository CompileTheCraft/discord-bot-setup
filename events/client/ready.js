module.exports = (Discord, client) => {
  console.log(`${client.user.tag} is online!. \nEvents Running \nCommands Registered \nLoading Database...`);

  const statusArray = [
    `Prefix: $`,
    `Type Command: $help`,
    `Baking a cake`,
    `Waking up our developers!`,
    `Developers: Devnamyte#0001 and JUSTMRBHD#0001`,
    `Over ${client.guilds.cache.size} servers!`,
    `Over ${client.channels.cache.size} channels!`,
    `Over ${client.users.cache.size} users!`
  ];

  let index = 0;
  setInterval(() => {
    if (index === statusArray.length) index = 0;
    const status = statusArray[index];
    client.user.setActivity(status, { type: "WATCHING" });
    index++;
  }, 15000);
}