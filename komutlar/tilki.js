const Discord = require('discord.js');
const { fox } = require("randomfox");
exports.run = async (client, message, args) => {
   message.channel.send(fox());
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tilki'
};