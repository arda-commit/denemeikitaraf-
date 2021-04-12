module.exports = {
     name: "reboot",
     code: `
$djsEval[process.exit()]
$wait[1s]
$channelSendMessage[$channelID;Bot Yeniden başlatıldı!]
$onlyForIDs[714756114520211486;Bu komutu kullanamazsın]
`
}