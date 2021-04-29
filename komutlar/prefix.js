const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
   const prefixayarlamesaj = new Discord.MessageEmbed()
   .setDescription(`
   Bir prefix girin! örnek: m!
   `)

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["taslak"]
};

module.exports.help = {
  name: "taslak",
  description: "",
  usage: ""
};
