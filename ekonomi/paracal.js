module.exports = {
 name:"paraçal",
  code:`
  $if[$randomText[a;b;c]!=b]
  soygun başarısız oldu! yakalandın ve ona $random[1;1000] coin ödemek zorunda kaldın!
  $setUserVar[coin;$sub[$getUserVar[coin];$random[1;1000];$authorID]
  $setUserVar[coin;$sum[$getUserVar[coin];$random[1;1000];$mentioned[1]]
  $else
  kişiye farkettirmeden biraz coin çalabildin! çaldığın coinin miktarı: $random[1;1000]
  $setUserVar[coin;$sum[$getUserVar[coin];$random[1;1000];$authorID]
  $setUserVar[coin;$sub[$getUserVar[coin];$random[1;1000];$mentioned[1]]
  $endif
  $argsCheck[1;birini etiketle]
  $onlyIf[$mentioned[1]==$authorID;kendinden mi para çalacaksın?]
  $onlyIf[$getUserVar[coin;$mentioned[1]=<300;etiketlediğin kişinin en az 300 parası olması lazım!]]
  $globalCooldown[5s;5 saniye bekle]
  `
  }