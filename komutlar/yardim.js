exports.run = (client, message, args) => {
const Discord = require('discord.js')
const embed = new Discord.MessageEmbed()
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
!!herkeserolver (herkese etiketlenen rolü verir)
!!kullanıcıbilgi (kullanıcının bilgilerine bakarsınız)
!!deprembilgi (son 10 depremi ve bilgilerini sıralar)
!!dosyaoluştur (dosya oluşturursunuz)
--------------------------------------------------------
        -------sahip yardım---------
!!load (bir komutu yükler)
!!eval (komut denersiniz)
!!reboot (botu yeniden başlatır)
`)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["komutlar"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "tüm komutlar",
  usage: "yardım"
};
