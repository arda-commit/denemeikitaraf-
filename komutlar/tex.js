const Discord = require('discord.js');
const generator = require('generate-password');


exports.run = function(client, message, args) {
    var uzunluk = args.slice(0).join(' ');
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
    "",
"",
"",
"",
""
    ]
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'şifre', 
  description: 'Rastgele bir şifre oluşturur.',
  usage: 'şifre <uzunluk>'
};
