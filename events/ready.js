const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
module.exports = client => {
  var e = db.fetch(`botdurum_${client.user.id}`)
  if(e === "dnd"){
    client.user.setStatus("dnd")
  }
  else if(e === "idle"){
    client.user.setStatus("idle")
  }
  else if(e === "online"){
    client.user.setStatus("online")
  }
  else return;
}
  var prefix = "!"
  var textcik = db.fetch(`oynaniyor_${client.user.id}`)
  if(!textcik) return;
  client.user.setActivity(textcik)
};
 
// BOTUM STATS KISMI
//dnd : rahatsız etme
//idle : boşta 
//online : çevrimiçi