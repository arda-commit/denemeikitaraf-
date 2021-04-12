const Discord = require('discord.js')
const os = require('os')
var speedTest = require('speedtest-net');

exports.run = (client, message) => {
  var osType = os.type();

  if (osType === 'Darwin') osType = 'macOS'
  else if (osType === 'Windows') osType = 'Windows'
  else if (osType === 'Linux') osType = 'Linux'
  else if (osType === 'Ubuntu') osType = 'Ubuntu'
  else osType = os.type();
    var test = speedTest({maxTime: 5000});
    client.on('data', data => {
const plasmic = new Discord.MessageEmbed()
 .setColor("RANDOM")        
.setTitle('**Speedtest Sonuçlar**')
.addField('**Anlık İstatistikler**', `İndirme: **${data.speeds.download}**
Yükleme: **${data.speeds.upload}**`)
.addField('**Normal Olarak Ölçülen İstatistikler**', `İndirme: **${data.speeds.originalDownload}**
Yükleme: **${data.speeds.originalUpload}**`)      
.addField('**Pingler**', `Discord API Pingi: **${client.ping}**
Speedtestde Ölçülen Ping: **${data.server.ping}**`)
.addField('**Diğer Bilgiler**', `İnternet Portunun IP'sı: **${data.client.ip}**
İşletim Sistemi: **${osType}**
İnternet Sağlayıcısı: **${data.client.isp}**
Host: **${data.server.host}**
Lokasyon: **${data.server.country}**,**${data.client.country}**
Sağlayıcı Lokasyonu: **${data.server.location}**
Sağlayıcı Sponsoru: **${data.server.sponsor}**`)
.setFooter("Bilgiler %100 doğru değildir!")
  message.channel.send(plasmic)
});
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'speedtest',
  description: 'internet testi yapar',
  usage: 'speedtest'
};