exports.run = (client, message, args) => {
    var command = args[0];
    message.channel.send("`" + command + "` adlı komut yeniden yükleniyor...")
      .then(m => {
        client.reload(command)
          .then(() => {
            m.edit("`" + command + "` adlı komut başarıyla yeniden yüklendi.");
          })
          .catch(e => {
            m.edit(`Komut yeniden yüklenirken bir hata oluştu: ${command}\n\`\`\`${e.stack}\`\`\``);
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
  name: 'reload',
  description: 'yeniden komutu yükler.',
  usage: 'reload <komut adı>'
};
