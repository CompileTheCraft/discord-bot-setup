const fs = require('fs');

module.exports = (client, Discord) => {
  const load_dirs = (dirs) => {
    const command_files = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js'));

    for (const file of command_files) {
      const command = require(`../commands/${dirs}/${file}`);
      if (command.name) {
        client.commands.set(command.name, command);
      } else {
        continue;
      }
    }
  }

  ['economy', 'fun', 'moderation', 'util'].forEach(c => load_dirs(c));
}