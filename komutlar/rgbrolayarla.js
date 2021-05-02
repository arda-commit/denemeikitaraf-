const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (client, message, args) => {
  let rgbrol = args[0]
   const hata = new Discord.MessageEmbed()
   .setTitle("hata")
   .setDescription(`lütfen rol ismi girin!`)
   if(!rgbrol) return message.channel.send(hata)
  const basarili = new Discord.MessageEmbed()
  .setTitle("Rgb rol ayarlandı!")
  .setDescription(`rgb rolü başarıyla ${rgbrol} olarak ayarlandı!`)
  db.set(`rgbrol_${message.guild.id}`, rgbrol)
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rgbrol-ayarla","rengarenkrol"],
  permLevel: 4
};

module.exports.help = {
  name: "rgbrol",
  description: "",
  usage: ""
};
