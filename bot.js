const { Telegraf } = require('telegraf')

const bot = new Telegraf("PUT YO TOKEN HERE")
bot.catch((err, ctx) => {
    console.log(`Encountered an error for ${ctx.updateType}`, err)
  })
bot.start((ctx) => ctx.reply("I'm alive, use /help to see the many of my command"))
bot.help((ctx) => ctx.reply('use "/howtrans [Something]" to check how trans is the something'))
bot.hears(/howtrans (.+)/, ({ match, reply }) => {
    const randomnumber = Math.floor(Math.random() * 100) + "%";
   reply(match[1] + " is " + randomnumber + " trans").catch((err) => { 
    console.log(err)
    const trimerr = err.toString().trim()
    reply(trimerr)
 })
});

 bot.launch()
