import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function serverInfo(msg, args) {
    msg.channel.send(`\**${msg.guild.name}\** server\nInformation on \**${msg.guild.name}\** server.\n\**No.of members:\** ${msg.guild.memberCount}\n\**Region:\** ${msg.guild.region}\n\**AFK Timeout:\** ${msg.guild.afkTimeout}\n\**Maximum Members:\** ${msg.guild.maximumMembers}\n\**Verification Level:\** ${msg.guild.verificationLevel}\n\**Default Message Notifications:\** ${msg.guild.defaultMessageNotifications}`)
}

export default serverInfo;