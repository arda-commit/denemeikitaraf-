const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if(!args[0]) return message.channel.send("Lütfen Silinecek Sayı Miktarını Giriniz.").then(m => m.delete({timeout: 5000}));
  
message.channel.bulkDelete(args[0]);
  
return message.channel.send(`**${args[0]}** Adet Mesaj Başarıyla Temizlendi.`).then(m => m.delete({timeout: 5000}));
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: []
}

exports.help = {
name: 'temizle'
};