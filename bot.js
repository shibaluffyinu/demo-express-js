const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');


bot.onText(/\/contract/, (msg) => {
    bot.sendMessage(msg.chat.id, '0xEd5782C218918314aAad7b3FF89BB0BFF3dC0514')
})

bot.onText(/\/ido/, (msg) => {
    bot.sendMessage(msg.chat.id, 'IDO is planned to start on 24/4/2022 at DxSale')
})
bot.onText(/\/info/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Symbol: SLUFFY, Decimals: 8, Total supply: 1,000,000,000,000,000')
})
bot.onText(/\/tokenomics/, (msg) => {
    bot.sendMessage(msg.chat.id, '95% IDO & DEX listing, 5% marketing | 8% fee: 4% distribute to hodlers, 2% team fund, 1% burn, 1% add back to liquidity pool')
})
bot.onText(/\/web/, (msg) => {
    bot.sendMessage(msg.chat.id, 'https://shibaluffyinu.org')
})
bot.onText(/\/twitter/, (msg) => {
    bot.sendMessage(msg.chat.id, 'https://twitter.com/shibaluffyinu')
})
bot.onText(/\/medium/, (msg) => {
    bot.sendMessage(msg.chat.id, 'https://medium.com/@shibaluffyinu')
})

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, 'contract | tokenomics | info | ido | web | twitter | medium')
})

module.exports = bot;