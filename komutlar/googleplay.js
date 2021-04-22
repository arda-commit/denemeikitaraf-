const Discord = require('discord.js');
const { search } = require("simple-play-store-search");
exports.run = async (client, message, args, path) => {
  let enginn = args.slice(0).join(' ')
  if(!enginn) return message.channel.send('Lütfen uygulama ismi girin!')
let engin = search(enginn)
const embed = new Discord.MessageEmbed()
.setTitle(`:label:  ${(await engin).name}  :label:`)
.setDescription(`:credit_card:  Fiyat: ${(await engin).price} \n \n :bust_in_silhouette:  Oy: ${(await engin).rating} \n \n :speech_balloon:  Açıklama: ${(await engin).description} \n \n [Yüklemek için tıkla](${(await engin).url})`)
.setThumbnail(`${(await engin).icon}`)
.setFooter(`Sunan: ${(await engin).developer.name}`)
.setTimestamp()
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'google-play'
};