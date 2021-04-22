const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let mesaj = args.slice(0).join(' ')
  if(!mesaj) 
  
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