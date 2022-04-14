const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

const shills = [
    "Combining the power of DeFi, GameFi,... Shiba Luffy Inu($SLUFFY) will be the next x100 gem in BSC.\n   💎 IDO coming soon\n    💎 Doxxed and experienced team\n    💎 Clear roadmap & tokenomics\n   💎 Audited\nIf $SLUFFY ever reach the marketcap of $ZORO, $SLUFFY will x100.\nJoin Shiba Luffy Inu community at shibaluffyinu_official, or at Shiba Luffy Inu's website for detail contact info: shibaluffyinu org.",
    "Missed Shiba Inu and Zoro Inu, Luffy Inu? Look no further! Shiba Luffy Inu($SLUFFY) will be the next x100 gem in BSC. $SLUFFY has an 8% fee:\n   💎 4% distributed across all holders\n    💎 2% team fund\n    💎 1% burn\n   💎 1% add back to liquidity\nSLUFFY contract address: 0xEd5782C218918314aAad7b3FF89BB0BFF3dC0514\nOur website: https://shibaluffyinu.org.",
]
const hype = [
    "Shiba Luffy Inu to the MOON!! 🌙🌙",
    "This will be the next BSC x100 gem 💎💎",
    "Let's go 🔥🔥",
    "Big pump soon. 🔥🔥",
    "Don't miss SLUFFY upcoming IDO!",
    "IDO coming in 10 days.🔥🔥"
]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
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
bot.onText(/\/shill/, (msg) => {
    const rand = getRandomInt(shills.length);
    bot.sendMessage(msg.chat.id, shills[rand])
})
bot.onText(/\/hype/, (msg) => {
    const rand = getRandomInt(hype.length);
    bot.sendMessage(msg.chat.id, hype[rand])
})
bot.onText(/\/listing/, (msg) => {
    bot.sendMessage(msg.chat.id, "🔥 Coinsniper, Watcherguru, Coinhunter, thebittimes 🔥")
})

bot.onText(/\/whitelist/, (msg) => {
    bot.sendMessage(msg.chat.id, "https://medium.com/@shibaluffyinu/get-whitelisted-for-upcoming-shiba-luffy-inu-ido-cfb858d7f24c")
})

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, 'contract | tokenomics | info | ido | web | twitter | medium | shill | hype | listing')
})

module.exports = bot;