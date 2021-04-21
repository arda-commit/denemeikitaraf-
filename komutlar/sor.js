const dc = require('discord.js');
const ai = require('@codare/codare.ai')
exports.run = async(client, message, args) => {
  var soru = args.slice(0).join(' ')
  if(!soru) return message.reply("Bir soru belirtin!")
  ai.sor(soru).then(res => message.channel.send(`
  Soru: ${soru}
  
  Cevap: ${res}
  `))
}
exports.conf = {
  aliases: [],
  permLvl: 0
}
exports.help = {name: "sor"}

Komutlar / Sor.js