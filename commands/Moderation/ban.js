module.exports = {
  name: "ban",
  aliases: ["bye", "kill", "banish", "exile"],
  code: `
$ban[$guildID;$mentioned[1;no];;$noMentionMessage]
$username[$mentioned[1;no]] has been exiled from Project: Heaven.
$onlyPerms[ban;You cannot use this command.]`
  
}
