exports.run = async (client, message, args) => {
let guildName = args[0];
if (!guildName) return message.channel.send("Oluşturmamı istediğiniz sunucunun adını girin")
const Guild = await client.guilds.create(guildName, {
          channels: [
              {"name": "genel", "topic": "."},
          ]
      });

      const GuildChannel = Guild.channels.cache.find(channel => channel.name == "genel");
      const Invite = await GuildChannel.createInvite({maxAge: 0, unique: true, reason: "."})

      message.channel.send(`Sunucunuz oluşturuldu Davet linki: ${Invite.url}`);
}

exports.conf = {
    aliases: ["sunucu-kur"]
}

exports.help = {
    name: "sunucu-oluştur",
    description: "Bota sunucu oluşturtursunuz.",
    usage: "sunucu-oluştur <sunucu-adı>"
}