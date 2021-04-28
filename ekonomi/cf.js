module.exports = {
  name:"cf",
  code:`
  $if[$randomText[a;b]==a]
  Maalesef kaybettiniz. $message kadar paranızı kaybettiniz
  $setUserVar[coin;$sub[$getUserVar[coin];$message[1]];$authorID]
  `
  }