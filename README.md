# Acid code
This is only for the developers of Acid. Acid is one of our successful discord bots powered by [replit](https://replit.com/) by our trusted discord bot developers (DBD) SkyBlood#1230 and みいしゃ#7148. The bot is under ongoing maintenance, we are not sure when this maintenance will be over soon.

Bot Current Categories = {
	 - Moderation
	 - Administration
	 - Developers Module
}

## Index.js File
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]",
intents: "all",
mobilePlatform: true,
nonPrefixed: true
})

bot.status({
  text: "$serverCount servers",
  type: "WATCHING",
  time: 12
})


//Events
bot.onMessage()

bot.onJoin()
bot.joinCommand({ //command
channel: "$getServerVar[autoGreet;$guildID]", //channel where it will log
code: `
$title[A new member as joined us!]
$description[$getServerVar[greetMessage]]
$thumbnail[$authorAvatar]
$color[$random[0;999999]]
$addTimestamp
` //Message sent to <channel>
})

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})


//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.variables({
  prefix: "*",
  autoGreet: "",
  greetMessage: ""
})


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")
