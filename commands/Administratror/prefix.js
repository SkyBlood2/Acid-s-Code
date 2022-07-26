module.exports = {
  name: "prefix",
  aliases: ["change"],
  code: `$setServerVar[prefix;$noMentionMessage;$guildID]
Prefix changed to "$noMentionMessage"`
}
