module.exports = {
  name: "take",
  aliases: ["strip"],
  code: `
$takeRole[$guildID;$mentioned[1];$mentionedRoles[1]]
Took role <@$mentionedRoles[1]> from <@$mentioned[1]>.`
}
