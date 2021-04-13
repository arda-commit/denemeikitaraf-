const discord = require("discord.js");
exports.run = (client, message, args) => {
var dis = args[0]
if(isNaN(dis) || dis === "0000") { message.channel.send(`Böyle bir discrim yok.`) 
} else {
var discriminator = client.users.cache.filter(t => t.discriminator === dis)
var liste = []
discriminator.forEach(bulunan => liste.push(bulunan.tag))
message.channel.send(`${dis} etiketine sahip 20 üye: ${liste.slice(0, 10).join("\n")}`)
}
}
exports.conf = {
    enabled: true, 
    guildOnly: true, 
    aliases: [], 
    permLevel: 0
  };

  exports.help = {
    name: 'discrim'
  };