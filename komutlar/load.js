exports.run = (client, message, args) => {
    var command = args[0];
    message.channel.send("`" + command + "` adlı komut yükleniyor...")
      .then(m => {
        client.load(command)
          .then(() => {
            m.edit("`" + command + "` adlı komut başarıyla yüklendi.");
          })
          .catch(e => {
            m.edit(`Komut yüklenirken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
          if(message.author.id ==! "714756114520211486") return message.channel.send('sahibim değilsin')
          });
      });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'load',
  description: 'Yeni eklenen komutu yükler.',
  usage: 'load <komut adı>'
};
