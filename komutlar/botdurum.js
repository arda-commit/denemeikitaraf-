const Discord = require('discord.js');
const qdb = require('quick.db')
const moment = require('moment')
var p = "!!"
exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir komut belirtmen gerekli! Eğer kullanımı bilmiyorsan \`${p}botdurum yardım\``))
    if(args[0] === "oynanıyor"){
      var text = args.slice(1).join(' ')
        if(!text) return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bir durum belirtmen gerekli! Eğer kullanımı bilmiyorsan \`${p}botdurum yardım\``))
        qdb.set(`oynaniyor_${client.user.id}`, text)
return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`Bot oynanıyor'u \`${text}\` olarak ayarlandı! Bot yeniden başlatılıyor.`)).then(message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Dışarıdan müdahele! Oynanıyor Durumu Değişti! Bot yeniden başlatılıyor!`)
    process.exit(1);
  }).catch(console.error)
    };
    if(args[0] === "dnd"){
        qdb.set(`botdurum_${client.user.id}`, "dnd")
        return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bot durumu \`dnd\` olarak ayarlandı! Bot yeniden başlatılıyor.")).then(message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Dışarıdan müdahele! Oynanıyor Durumu Değişti! Bot yeniden başlatılıyor!`)
    process.exit(1);
  }).catch(console.error)
  }
        if(args[0] === "boşta"){
        qdb.set(`botdurum_${client.user.id}`, "idle")
        return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bot durumu \`idle\` olarak ayarlandı! Bot yeniden başlatılıyor.")).then(message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Dışarıdan müdahele! Oynanıyor Durumu Değişti! Bot yeniden başlatılıyor!`)
    process.exit(1);
  }).catch(console.error)
  }
       if(args[0] === "çevrimiçi"){
        qdb.set(`botdurum_${client.user.id}`, "online")
        return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bot durumu \`çevrimiçi\` olarak ayarlandı! Bot yeniden başlatılıyor.")).then(message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Dışarıdan müdahele! Oynanıyor Durumu Değişti! Bot yeniden başlatılıyor!`)
    process.exit(1);
  }).catch(console.error)
  }
        if(args[0] === "yayında"){
        qdb.set(`botdurum_${client.user.id}`, "streaming")
        return message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription("Bot durumu \`yayında\` olarak ayarlandı! Bot yeniden başlatılıyor.")).then(message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Dışarıdan müdahele! Oynanıyor Durumu Değişti! Bot yeniden başlatılıyor!`)
    process.exit(1);
  }).catch(console.error)
  }
  if(args[0] === "yardım"){
      const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setDescription(`
          **${p}botdurum oynanıyor <yazı>** : Oynanıyor durumunuzu ayarlar.
          **${p}botdurum dnd** : Bot'u rahatsız etme moduna geçirir.
          **${p}botdurum çevrimiçi** : Bot'u çevrimiçi moda geçirir.
          **${p}botdurum boşta** : Bot'un durumunu boşta yapar.
          **${p}botdurum yayında** : Bot'un durumunu yayında yapar.

          **DİKKAT! Bu işlem botunuzu yeniden başlatmaktadır!**
          `)
      return message.channel.send(embed)
  }
 


  

};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botdurum',
};