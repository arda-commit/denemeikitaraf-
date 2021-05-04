const Discord = require("discord.js");
const db = require("quick.db")
module.exports.run = async (client, message) => {
  
   const basarili = new Discord.MessageEmbed()
   .setTitle("durduruldu")
   .setDescription("rgb rolünü durdurdum")
   .setFooter("RGB ROLÜNÜ TEKRAR AYARLAMAN LAZIM!")
   message.channel.send(basarili)
   db.set(`rgbrol_${message.guild.id}`, )
  

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

module.exports.help = {
  name: "rgbdurdur",
  description: "",
  usage: ""
};
