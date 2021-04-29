exports.run = (client, message, args) => {
const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
const prefix = db.fetch(`prefix_${message.guild.id}`)
const embed = new Discord.MessageEmbed()
.setTitle('Yardım menüsü')
.setDescription(`
${prefix}seviye-log (seviye logu ayarlarsınız)
${prefix} snipe (en son silinen mesajı görürsünüz)
${prefix}şifre (belirttiğiniz uzunlukta şifre oluşturur)(en fazla 2000)
${prefix}discrim (belirttiğiniz tagda sunucuda üye arar)
${prefix}sunucubilgi (sunucunun bilgisine bakarsınız)
${prefix}v11tov12 (v11 bir kodu v12 yaparsınız)
${prefix}düello (etiketlediğiniz kişiyle düello yaparsınız)
${prefix}rank (rankınıza bakarsınız)
${prefix}temizle (belirttiğiniz miktarda mesaj siler)
${prefix}herkeserolver (herkese etiketlenen rolü verir)
${prefix}kullanıcıbilgi (kullanıcının bilgilerine bakarsınız)
${prefix}deprembilgi (son 10 depremi ve bilgilerini sıralar)
${prefix}dosyaoluştur (dosya oluşturursunuz)
${prefix}kullanıcibilgi (kullanıcının bilgisine bakarsınız)
${prefix}mesaj (bot yazdığınız şeyi yazar)
${prefix}yazıyor (bot kanala yazıyor gibi görünür)
${prefix}yazıyordurdur (botun kanala yazmasını durdurur)
${prefix}çalış (çalışırsınız)
${prefix}cf (belirttiğiniz miktarda kumar oynarsınız)
${prefix}günlük (günlük coininizi alırsınız)
${prefix}coin (coininize bakarsınız)
--------------------------------------------------------
        -------sahip yardım---------
${prefix}load (bir komutu yükler)
${prefix}eval (komut denersiniz)
${prefix}reboot (botu yeniden başlatır)
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
