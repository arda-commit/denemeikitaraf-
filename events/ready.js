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
    }
module.exports = client => {
var oyun = [
    ".",
    "..",
    "...",
    "....",
    ".....",
    ".......",
    "......",
    ".....",
    "....",
    "...",
    "..",
    "."
  
  ];
client.user.setStatus("dnd")
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
client.user.setStatus("dnd")
  }