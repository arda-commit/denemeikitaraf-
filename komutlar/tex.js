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
  const shelly = Discord.MessageEmbed()
  .setImage("https://cdn.discordapp.com/attachments/838725812278132761/838725896226603038/shelly_v2_01.png")
if(tex === "shelly") return message.channel.send(shelly)
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
