const { Telegraf } = require('telegraf')

// Create the bot using the token from the environment variable
const bot = new Telegraf(process.env.TELEGRAM_TOKEN)

// On /start command
bot.start((ctx) => ctx.reply('Welcome! :)'))

// On /help, remember to set on bot config as quick command
bot.help((ctx) => ctx.reply('Send me a sticker'))

// On sticker
bot.on('sticker', (ctx) => ctx.reply('Nice one 👍'))

// On specific message
bot.hears('Hi', (ctx) => ctx.reply('Hello from Digital Ocean functions!'))

// On any other message
bot.on('message', (ctx) => ctx.reply(`${ctx.message.text} 👍`))

function main(args) {
	// Handle bot messages data, coming from the HTTP request
	bot.handleUpdate(args)
	return {body: "ok"}
}

exports.main = main
