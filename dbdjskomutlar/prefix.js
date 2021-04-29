module.exports = {
  name:"prefix",
  code:`$setServerVar[prefix;$message[1]]
  $argsCheck[1; ]
  $onlyIf[$message>3; ]`
}