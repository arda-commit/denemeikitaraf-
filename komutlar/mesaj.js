const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let mesaj = args.slice(0).join(' ')
  if(!mesaj) return message.channel.send("bir mesaj gir")
  message.channel.send(mesaj)
  
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mesaj'
};