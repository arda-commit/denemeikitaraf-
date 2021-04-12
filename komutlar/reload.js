const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let komutlar;

exports.run = async (client, message, args) => {

if(message.author.id !== "ayarlar.sahip") return;

if (!args[0]) return message.channel.send('komut ismi gir');

if (client.commands.has(args[0])) {
komutlar = client.commands.get(args[0]);
} else if (client.aliases.has(args[0])) {
komutlar = 
client.commands.get(client.aliases.get(args[0]));
}

if (!komutlar) return message.channel.send(`\`${args[0]}\` adında komut bulunmuyor`);
komutlar = command.help.name;

client.load(komutlar)

message.channel.send(`\`${command}\` adlı komut reloadlandı`);
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = { 
  name: 'reload',
  description: "reload",
  usage: 'reload'
}
