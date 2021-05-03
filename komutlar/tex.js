const Discord = require('discord.js');


exports.run = function(client, message, args) {
    var tex = args.slice(0).join(' ');
  var karakterler = [
    "shelly",
    "nita",
    "colt",
    "bull",
    "jessie",
    "brock",
    "dynamike",
    "bo",
    "8-bit",
    "emz",
    "stu",
    "el primo",
    "rosa",
    "barley",
    "poco",
    "carl",
    "rico",
    "darrly",
    "penny",
    "jacky",
"piper",
"pam",
"frank",
"bibi",
    "bea",
"nani",
"edgar",
"mortis",
"tara",
    "gene",
"max",
"mr.p",
"sprout",
"byron",
    "spike",
"leon",
"crow",
"sandy",
"amber",
    "gale",
"surge",
"colette",
"lou",
"ruffs",
    "belle"
    ]
if(tex === "shelly") return message.channel.send("https://cdn.discordapp.com/attachments/838725812278132761/838725896226603038/shelly_v2_01.png")
  if(tex === "colt") return message.channel.send("https://cdn.discordapp.com/attachments/838725812278132761/838733146257883156/colt_tex.png")
  if(tex === "nita") return message.channel.send("https://cdn.discordapp.com/attachments/838725812278132761/838734466380857364/nita_tex.png")
  if(tex === "bull") return message.channel.send("https://cdn.discordapp.com/attachments/838725812278132761/838736382767136768/bull_tex_01.png")
  if(tex === "jessie") return message.channe.send("https://cdn.discordapp.com/attachments/838725812278132761//jessie_tex.png")
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["texture"],
  permLevel: 0 
};

exports.help = {
  name: 'tex', 
  description: 'karakterin texini verir',
  usage: 'tex <karakter>'
};
