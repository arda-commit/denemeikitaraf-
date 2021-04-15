exports.run = (client, message, args) => {
const Discord = require('discord.js')
const embed = Discord.MessageEmbed()
.setTitle('Yardım menüsü')
.setDescription(`
!!seviye-log (seviye logu ayarlarsınız)
!!snipe (en son silinen mesajı görürsünüz)
!!şifre (belirttiğiniz uzunlukta şifre oluşturur)(en fazla 2000)
!!discrim (belirttiğiniz tagda sunucuda üye arar)
!!sunucubilgi (sunucunun bilgisine bakarsınız)
!!v11tov12 (v11 bir kodu v12 yaparsınız)
!!düello (etiketlediğiniz kişiyle düello yaparsınız)
!!rank (rankınıza bakarsınız)
!!temizle (belirttiğiniz miktarda mesaj siler)
!!
`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "tüm komutlar",
  usage: "yardım"
};
