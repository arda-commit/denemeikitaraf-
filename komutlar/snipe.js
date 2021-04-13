const discord = require('discord.js')
const db = require('quick.db')

   exports.run = async(client, message, args) => {
    const mesaj = await db.fetch(`sinip.id.${message.guild.id}`)
    if(!mesaj) {

    const bulunamadi = new discord.MessageEmbed()
  .setDescription(`Mesaj bulunamadı`)
    message.channel.send(bulunamadi);

          } else {

  let silen = client.users.cache.get(mesaj);
  const mesaj2 = await db.fetch(`sinip.mesaj.${message.guild.id}`)
  const silinenmesaj = new discord.MessageEmbed()
  .setAuthor(client.user.username, silen.avatarURL())
  .setDescription(`Silinen Mesaj:` + mesaj2)
  message.channel.send(silinenmesaj) }
}

exports.conf = {
    enabled:true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
  name: "snipe",
}
