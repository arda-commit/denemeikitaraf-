const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
var dbd = require('dbd.js')
const os = require('os');
const speedtest = require('speedtest-net');
const queue = new Map();
const { GiveawaysManager } = require("discord-giveaways");
const ms = require("parse-ms");
const dbb = require('plasma-db');
var bot = new dbd.Bot({
    token:process.env.token,
    prefix:"!!"
})
bot.onMessage()
var reader = fs.readdirSync("./dbdjskomutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./dbdjskomutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}

const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
client.login(process.env.token);
client.ÂrézCK = {
  başarılı: "#66ff00",
  başarısız: "#ff0000" 
 }
client.on('messageDelete', async message => {
  const db = require("quick.db")
  const dbb = require('plasma-db')

  db.set(`sinip.mesaj.${message.guild.id}`, message.content)
  db.set(`sinip.id.${message.guild.id}`, message.author.id)
  let engin = dbb.fetch(`mesajlog_${message.guild.id}`)
  if(!engin) return;
  const embed2 = new Discord.MessageEmbed()
  .setTitle('Bir mesaj silindi!')
  .setDescription(`__**Kişi Bilgileri**__ \n Silen kişi: <@${message.author.id}> \n Silen kişinin idi: ${message.author.id} \n \n __**Kanal Bilgileri**__ \n Silinen Kanal: <#${message.channel.id}> \n Silinen Kanalın idi: ${message.channel.id} \n \n __**Mesaj Bilgileri**__ \n Silinen mesaj: ${message.content} \n Silinen Mesajın İdi: ${message.id}`)
  .setColor('RANDOM')
 client.channels.cache.get(engin).send(embed2)
})

//
client.on("messageUpdate", async (oldMessage, newMessage) => {
  let engin = dbb.fetch(`mesajlog_${oldMessage.guild.id}`)
  if(!engin) return;
  if(oldMessage.author.bot) return;
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir mesaj düzenlendi!')
  .setDescription(`__**Kişi Bilgileri**__ \n Düzenleyen kişi: <@${oldMessage.author.id}> \n Düzenleyen kişinin idi: ${oldMessage.author.id} \n \n __**Kanal Bilgileri**__ \n Düzenlenen Kanal: <#${oldMessage.channel.id}> \n Düzenlenen kanalın idi: ${oldMessage.channel.id} \n \n __**Mesaj Bilgileri**__ \n Düzenlenen mesaj: ${oldMessage.content} \n Düzenlenen mesajın yeni hali: ${newMessage.content} \n Düzenlenen mesajın idi: ${oldMessage.id} \n [Düzenlenen mesaja gitmek için tıkla](${oldMessage.url})`)
  .setColor('RANDOM')
  client.channels.cache.get(engin).send(embed)
  

});
client.on("guildMemberAdd", async member => {
    var engin = await db.fetch(`hgbbmesaj_${member.guild.id}`)
    if(!engin) return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Hoşgeldin!')
    .setDescription(`<@${member.id}> sunucumuza katıldı hoşgeldin aramıza!`)
    .setColor('RANDOM')
    client.channels.cache.get(engin).send(embed);
  })
client.on("guildMemberRemove", async member => {
    var engin = await db.fetch(`hgbbmesaj_${member.guild.id}`)
    if(!engin) return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Görüşürüz!')
    .setDescription(`<@${member.id}> sunucumuzdan ayrıldı görüşürüz :(`)
    .setColor('RANDOM')
    client.channels.cache.get(engin).send(embed);
  })

//
client.on("messageUpdate", async (oldMessage, newMessage) => {
  let engin = dbb.fetch(`mesajlog_${oldMessage.guild.id}`)
  if(!engin) return;
  if(oldMessage.author.bot) return;
  const embed = new Discord.MessageEmbed()
  .setTitle('Bir mesaj düzenlendi!')
  .setDescription(`__**Kişi Bilgileri**__ \n Düzenleyen kişi: <@${oldMessage.author.id}> \n Düzenleyen kişinin idi: ${oldMessage.author.id} \n \n __**Kanal Bilgileri**__ \n Düzenlenen Kanal: <#${oldMessage.channel.id}> \n Düzenlenen kanalın idi: ${oldMessage.channel.id} \n \n __**Mesaj Bilgileri**__ \n Düzenlenen mesaj: ${oldMessage.content} \n Düzenlenen mesajın yeni hali: ${newMessage.content} \n Düzenlenen mesajın idi: ${oldMessage.id} \n [Düzenlenen mesaja gitmek için tıkla](${oldMessage.url})`)
  .setColor('RANDOM')
  client.channels.cache.get(engin).send(embed)
  

});
client.on("message", async message => {
  if(!message.guild) return;
  //--\\
  var gereken = db.fetch(`gerekli_${message.guild.id}`)
  if(!gereken){ var gereken = 9 }
  //--\\
  var eklenecek = db.fetch(`eklenecek_${message.guild.id}`)
  if(!eklenecek){ var eklenecek = 3 }
  //--\\
  var sınır = db.fetch(`sınır_${message.author.id + message.guild.id}`)
  if(!sınır){ var sınır = 150 }
  //--\\
  var xp = db.fetch(`xp_${message.author.id + message.guild.id}`)
  //--\\
  var seviye = db.fetch(`seviye_${message.author.id + message.guild.id}`)
  if(!seviye){ var seviye = 0 }
  //--\\
  if(message.author.bot || message.content < gereken) return;
  db.add(`xp_${message.author.id + message.guild.id}`, eklenecek)
  if(xp > sınır){
    db.delete(`xp_${message.author.id + message.guild.id}`)
    db.add(`sınır_${message.author.id + message.guild.id}`, 250)
    db.add(`seviye_${message.author.id + message.guild.id}`, 1)
  //--\\
  var log = db.fetch(`seviyelog_${message.guild.id}`)
  var logcuk = message.guild.channels.cache.get(log)
  if(!logcuk) return;
  //--\\
  logcuk.send(`${message.author} **${seviye + 1}** seviyesine ulaştı! Tebrikler ${message.author}`)
  }
})
client.on('message', async message => {
if (message.content ===  prefix + 'fakekatıl') { // Buraya ne yazarsanız yazdığınız şeye göre çalışır
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});
client.on('message', async message => {
if (message.content === prefix + 'fakeayrıl') { // Buraya ne yazarsanız yazdığınız şeye göre çalışır
  client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
});
client.on('ready', () => {
  console.log(`Bot Aktif :  ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => { 
	
	function rasteleSembol(uzunluk, semboller) {

var maske = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';

if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (semboller.indexOf('0') > -1) maske += '0123456789';


var sonuc = '';

 

for (var i = uzunluk; i > 0; --i) 

{

sonuc += maske[Math.floor(Math.random() * maske.length)];

}

return sonuc;

}

function spamla(){
	message.channel.send("https:/"+"/discord.gift/" + rasteleSembol(16,'0aA'));
}

	if (message.channel.id = message.channel.id){ //NİTROYU ATACAĞI KANALIN İDSİ
		if(message.content.startsWith("xrs!nitro")){ //ELLEME ÇALIŞMAZ :D
		try{
		var veri = message.content.toString();
		var veriSn = veri.substring(10)
 		var saniye = parseInt(veriSn);
 		var saniye1 = saniye * 1000;
		if (saniye > 1){
		setInterval(spamla, saniye1);
		}
		
		else{
			message.reply("Bir Hata Oluştu. Bu Arada En Az 2 Saniye Girmelisin");
		}
		}
		catch(err){
			message.channel.send("Teknik bir hata oluştu!");
		}
		}
		}
 	


});

client.on('message', msg => {
          if(msg.content === prefix + 'tokengen')
 var triesPerSecond = 20000
    let code = '';
    let dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(var i = 0; i < 59; i++){
        code = code + dict.charAt((Math.random() * dict.length));
    }
msg.channel.send(code)

})