module.exports = {
  name:"günlük",
  code:`
  Günlük ödülünü aldın! günlük ödülün: $random[1;1000] coin
  $setUserVar[coin;$sum[$getUserVar[coin];$random[1;1000]];$authorID]
  $globalCooldown[24h;1 gün beklemen lazım]
  `
  }