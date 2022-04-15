const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
const  { sanitize } = require('string-sanitizer')
const { returnJsonData } = require('./utils/returnJsonData')
const { returnJsonPosts } = require('./utils/returnJsonPosts')
let bot;

function MediumPostsController(){
    async function index(usermedium){

        const userSanitized = sanitize(`${usermedium}`)

        try{
            const mediumPosts = (userSanitized)? await returnJsonData(userSanitized.toString()) : { message: 'Unspecified user' }
            
            const dataMedium = returnJsonPosts(mediumPosts, mediumPosts.items)

            return dataMedium
        } catch{
            return []
        }
    }
    return {
        index
    }
}

const shills = [
    "Combining the power of DeFi, GameFi,... Shiba Luffy Inu($SLUFFY) will be the next x100 gem in BSC.\n   💎 IDO coming soon\n    💎 Doxxed and experienced team\n    💎 Clear roadmap & tokenomics\n   💎 Audited\nIf $SLUFFY ever reach the marketcap of $ZORO, $SLUFFY will x100.\nJoin Shiba Luffy Inu community at shibaluffyinu_official, or at Shiba Luffy Inu's website for detail contact info: shibaluffyinu org.",
    "Missed Shiba Inu and Zoro Inu, Luffy Inu? Look no further! Shiba Luffy Inu($SLUFFY) will be the next x100 gem in BSC. $SLUFFY has an 8% fee:\n    💎 4% distributed across all holders\n    💎 2% team fund\n    💎 1% burn\n    💎 1% add back to liquidity\nSLUFFY contract address: 0xEd5782C218918314aAad7b3FF89BB0BFF3dC0514\nOur website: https://shibaluffyinu.org.",
    "ShibaLuffyInu 🍻\nHello Guys A New DegenPlay 🔥 Marketing has started now ✅ Project looks totally beautiful 🔥🔥 Sits at super low Mcap 🟢 Ownership renounced ❤️ Tax automatic 👀 Join the group, ask and research 🥳\n\nhttps://Shibaluffyinu . org\n\nhttps://t . me/shibaluffyinu_official\n\nBSC Address: 0xEd5782C218918314aAad7b3FF89BB0BFF3dC0514\n\n\nCalled By @MordyCalls"
]
const announce1 = "Dear Community!\n\nIt's time to start aggressive marketing! \n\nWe signed deals with:\n✅ Big Group owners that will promote us pre-launch\n✅ Youtubers & Twitter influencers that will follow the Beta-Test\n✅ Medium articles \n✅ Billboards\n✅ and much more!\n\n🗓 Presale Date: April 24th - 6 PM UTC (DxSale)\n\n🗓 PancakeSwap Launch Date: April 25th - 6 PM UTC\n\n🌎 Web: https://shibaluffyinu.org\n🐦 Twitter: https://twitter.com/ShibaLuffyInu\n📓 Medium: https://medium.com/shibaluffyinu\n🛫 Telegram channel: https://t.me/shibaluffyinu_official\n🛫 Telegram community group: https://t.me/shibaluffyinu_community"
const hype = [
    "Shiba Luffy Inu to the MOON!! 🌙🌙",
    "This will be the next BSC x100 gem 💎💎",
    "Let's go 🔥🔥",
    "Big pump soon. 🔥🔥",
    "Don't miss SLUFFY upcoming IDO!",
    "IDO coming soon.🔥🔥"
]
const images = [
    "https://static.news.bitcoin.com/wp-content/uploads/2018/02/bitconnect-300x267.jpg",
    "https://static.news.bitcoin.com/wp-content/uploads/2020/01/9MqI3rYI-lambo-1024x576.jpg"
]
const shill_images = [
    "https://miro.medium.com/max/1050/1*hjrCn0cQHNG3EDNSCvORjA.png",
    'https://i.imgur.com/BgWvVdp.jpg'
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

bot.onText(/\/urls/, (msg) => {
    const web_urls =  {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Website",
                        url: "https://shibaluffyinu.org/",
                    },
                    {
                        text: "Twitter",
                        url: "https://twitter.com/shibaluffyinu",
                    },
                    {
                        text: "Medium",
                        url: "https://medium.com/@shibaluffyinu",
                    }
                ],
                [
                    {
                        text: "Telegram",
                        url: "https://t.me/shibaluffyinu_official",
                    },
                    {
                        text: "Whitepaper",
                        url: "https://shibaluffyinu2022.gitbook.io/shiba-luffy-inu-whitepaper/",
                    },
                    {
                        text: "BSCScan",
                        url: "https://bscscan.com/token/0xEd5782C218918314aAad7b3FF89BB0BFF3dC0514",
                    }
                ],
            ],
        }, 
        parse_mode: 'HTML'
    }
        
    bot.sendMessage(msg.chat.id, `<b>Shiba Luffy Inu urls:</b>`,  web_urls)
})
bot.onText(/\/vote/, (msg) => {
    const vote_urls =  {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Coinhunt",
                        url: "https://coinhunt.cc/coin/1133535863",
                    },
                    {
                        text: "Coinsniper",
                        url: "https://coinsniper.net/coin/30445",
                    },
                    {
                        text: "WatcherGuru",
                        url: "https://watcher.guru/coin/shiba-luffy-inu",
                    }
                ],
            ],
        }, 
        parse_mode: 'HTML'
    }
        
    bot.sendMessage(msg.chat.id, `<b>Vote for Shiba Luffy Inu($SLUFFY):</b>`,  vote_urls)
})

bot.onText(/\/contract/, (msg) => {
    bot.sendMessage(msg.chat.id, '0xEd5782C218918314aAad7b3FF89BB0BFF3dC0514')
})

bot.onText(/\/ido/, (msg) => {
    bot.sendMessage(msg.chat.id, 'IDO is planned to start on 24/4/2022 at DxSale')
})
bot.onText(/\/token/, (msg) => {
    const web_urls =  {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Token Info",
                        url: "https://shibaluffyinu2022.gitbook.io/shiba-luffy-inu-whitepaper/poneglyph/usdsluffy-token",
                    }
                ],
            ],
        }, 
        parse_mode: 'HTML'
    }
    bot.sendPhoto(msg.chat.id, 'https://i.imgur.com/7RPUUKW.png', {...web_urls, caption: '📈 Symbol: SLUFFY\n📈 Decimals: 8\n📈 Total supply: 1,000,000,000,000,000\n\nDistribute:\n  💸 90% IDO & DEX listing\n  💸 5% marketing\n  💸 5% Airdrop\n\nFee 8%:\n  💰 4% distribute to hodlers\n  💰 2% team fund\n  💰 1% burn\n  💰 1% buyback'})
    //bot.sendMessage(msg.chat.id, '📈 Symbol: SLUFFY\n📈 Decimals: 8\n📈 Total supply: 1,000,000,000,000,000\n\nDistribute:\n  💸 90% IDO & DEX listing\n  💸 5% marketing\n  💸 5% Airdrop\n\nFee 8%:\n  💰 4% distribute to hodlers\n  💰 2% team fund\n  💰 1% burn\n  💰 1% buyback', web_urls)
})
// bot.onText(/\/tokenomics/, (msg) => {
//     bot.sendMessage(msg.chat.id, 'Distribute:\n  💸 90% IDO & DEX listing\n  💸 5% marketing\n  💸 5% Airdrop\n\nFee 8%:\n  💰 4% distribute to hodlers\n  💰 2% team fund\n  💰 1% burn\n  💰 1% buyback')
// })
bot.onText(/\/announcement/, (msg) => {
    MediumPostsController().index("shibaluffyinu").then(data => {
        if(data.length > 0) {
            const newestPost = data[0]
            const options =  {
                reply_markup: {
                    inline_keyboard: [
                        [
                            {
                                text: "Read full article",
                                url: newestPost.link,
                            }
                        ],
                    ],
                }, 
                parse_mode: 'HTML'
            }
            if(newestPost.image && newestPost.image != '')bot.sendPhoto(msg.chat.id, newestPost.image);
            bot.sendMessage(msg.chat.id, `<b>${newestPost.title}</b> \n<i>${newestPost.description}</i>`, options)
        }
    })
})
bot.onText(/\/shill/, (msg) => {
    const rand = getRandomInt(shills.length * 5);
    const randImg = getRandomInt(shill_images.length * 5);
    bot.sendPhoto(msg.chat.id, shill_images[randImg % shill_images.length], {caption : shills[rand % shills.length]})
})
bot.onText(/\/hype/, (msg) => {
    const rand = getRandomInt(hype.length * 5);
    bot.sendMessage(msg.chat.id, hype[rand % hype.length])
})
bot.onText(/\/announce1/, (msg) => {
    bot.sendMessage(msg.chat.id, announce1)
})

bot.onText(/\/whitelist/, (msg) => {
    bot.sendMessage(msg.chat.id, "https://medium.com/@shibaluffyinu/get-whitelisted-for-upcoming-shiba-luffy-inu-ido-cfb858d7f24c")
})

bot.onText(/\/help/, (msg) => {
    bot.sendMessage(msg.chat.id, "How can I help?", {
        "reply_markup": {
            "keyboard": [["/urls", "/vote"],   ["/contract", "/token"], ["/announcement", "/ido"], ["/whitelist"], ["/hype", "/shill"]]
        }
    });
    //bot.sendMessage(msg.chat.id, 'urls | vote | contract | token | announcement | ido | announcement | whitelist | hype | shill')
})

module.exports = bot;