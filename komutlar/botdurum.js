const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  let durum = args.slice(0).join(' ')
  if(!durum) return message.channel.send("bir durum gir!")
  if(message.author.id !== "714756114520211486") return message.channel.send("sahibim değilsin!")
  client.user.setActivity(durum)
  message.channel.send("durum değişti! bot yeniden başlatılıyor!")
  process.exit(1)
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botdurum'
};