import Discord from 'discord.js';
const embed = new Discord.MessageEmbed();

function privacy(msg, args) {
  embed.setTitle("Privacy Policy")
  embed.setDescription("Privacy is valuable. We love our customers and we want all the information regarding them private. At Arbalistic we value privacy the most. Our bot does not see your messages. It doesn't hear your calls. At discord, our bot ranked first in terms of privacy. Your information doesn't come to our servers, it is only on your logged-in device/devices. Everything is end-to-end encrypted and there is no way we know which data is coming from which server. During these online times, privacy is a rare thing. So we here want your data to only be yours and shared only if you want to. This is our privacy. We designed our bot based on privacy. It is hard but it matters.")
  embed.setColor("#ad91ff")
  embed.setTimestamp()

  msg.author.send(embed);
};

export default privacy;