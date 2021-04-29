const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
 let prefix = args[0] 
   const prefixayarlamesajhata = new Discord.MessageEmbed()
   .setDescription(`
   Bir prefix girin! örnek: m!
   `)
   if(!prefix) return message.channel.send(prefixayarlamesajhata)
  if(prefix > "3") return message.channel.send("prefixin uzunluğu en fazla 3 olabilir!")
  const prefixayarlandi = new Discord.MessageEmbed()
  .setTitle("prefix ayarlandı")
  .setDescription(`prefix başarıyla \`${prefix}\` olarak ayarlandı!`)
  message.channel.send(prefixayarlandi)
  db.set(`prefix_${message.guild.id}`, prefix)
  if(!message.member.hasPerission("MANAGE_GUILD")) return message.channel.send(`bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olman lazım!`)
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "prefix",
  description: "",
  usage: ""
};
