const Discord = require("discord.js")
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const antilink = ['discord.gg/', 'discordapp.com/invite/', 'https://', 'http://']
const config = require("./config")

bot.commands = new Discord.Collection()
bot.color = "#7289da";

bot.login(config.token)
loadCommands(bot)
loadEvents(bot)
