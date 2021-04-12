module.exports = {
 name: "botbilgi",
 code:`
$title[Bot Bilgileri]
$author[$username[$clientid];$useravatar[$clientid]]
$thumbnail[https://cdn.discordapp.com/attachments/795966035919634455/807884403904741386/5495053-statistic-icons-download-5953-free-png-and-vector-icons-statistic-png-512_512_preview.png]
$color[Yellow]
$addField[Diğer;
• Gecikmem: $botPing ms
• Uptime: $replaceText[$replaceText[$replaceText[$uptime;s; Saniye;-1];h; Saat;-1];m; Dakika;-1]
• Sahibim: $usertag[$botownerid]]
$addField[Sürümler;
• NodeJS Sürümü: $getObjectProperty[nodev]
• Discord.js Sürümü: $getObjectProperty[discordv]
]
$addField[Hosting detayları;
• CPU Kullanımı: $cpu
• CPU Model: $djsEval[require ('os').cpus()[0\].model;yes] 
• CPU İşletim sistemi: $djsEval[require ('os').platform();yes]
• RAM kullanımı: $ram MB
• Depolama kullanımı: $djsEval[process.memoryUsage().rss / 1024 / 1024;yes] MB]
 $djseval[d.object.nodev = process.version
d.object.discordv = require('discord.js').version
$createObject[{}]]
$suppressErrors[]
`
}