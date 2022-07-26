module.exports = {
  name: "unban",
  aliases: ["repatriate", "restore", "return"],
  code: `
$message is now repatriated and is now welcomed back to the server! 🤙
$unban[$guildID;$findUser[$message[1]]]
$onlyPerms[ban;You cannot use this command.]
`
}
