function roblox(msg, args) {
  let argus = args.join(' ');

  const games = [
    "https://www.roblox.com/games/286090429/Arsenal",
    "https://www.roblox.com/games/3527629287/BIG-PaintballrefPageId=a3073b4d-1382-4d50-b48e-678afbea763d",
    "https://www.roblox.com/games/1962086868/Tower-of-Hell?refPageId=ffabb9fb-9a0f-4bde-9096-4b647265cf0b",
    "https://www.roblox.com/games/6073366803/Rage-Runner-METAVERSE?refPageId=c9f0fe85-4b24-4f58-a236-bc04b3774b7d",
    "https://www.roblox.com/games/5721826509/CODE-Amongst-Us?refPageId=2cbc729f-8439-4cc0-8900-04e8cda8dfa6",
    "https://www.roblox.com/games/4924922222/Brookhaven-RP?refPageId=2cbc729f-8439-4cc0-8900-04e8cda8dfa6",
    "https://www.roblox.com/games/6172932937/Energy-Assault",
    "https://www.roblox.com/games/189707/Natural-Disaster-Survival?refPageId=ffabb9fb-9a0f-4bde-9096-4b647265cf0b",
    ];

  if(argus === "arsenal") msg.channel.send(games[0]);
  if(argus === "big paintball") msg.channel.send(games[1]);
  if(argus === "tower of hell") msg.channel.send(games[2]);
  if(argus === "rage runner") msg.channel.send(games[2]);
  if(argus === "among us") msg.channel.send(games[4]);
  if(argus === "brookhaven") msg.channel.send(games[5]);
  if(argus === "energy assault") msg.channel.send(games[6]);
  if(argus === "natural disaster") msg.channel.send(games[7]);

  if(args.length == 0) {
    const randomGame = Math.floor(Math.random() * games.length);

    msg.channel.send(games[randomGame]);
  }
}

export default roblox;