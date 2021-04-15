const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if ( message.react('')) {
  message.channel.startTyping();
  message.delete()
}

};

exports.help = {
  name: "yazıyor",
  description: "deneme.",
  usage: "duyuru <mesajın>"
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  permlevel: 0,
  aliases: ["yazıyor"]
}