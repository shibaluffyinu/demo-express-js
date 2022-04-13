
import { Telegraf } from 'telegraf';
const bot = new Telegraf('5278569680:AAESpgWRI__VRDEzUAIiKUtpDatDYpQbzLc');
bot.command('contract', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, '0xEd5782C218918314aAad7b3FF89BB0BFF3dC0514', {

  })
})

bot.command('ido', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'IDO is planned to start on 24/4/2022 at DxSale', {

  })
})

bot.command('info', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'Symbol: SLUFFY, Decimals: 8, Total supply: 1,000,000,000,000,000', {

  })
})

bot.command('tokenomics', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, '95% IDO & DEX listing, 5% marketing | 8% fee: 4% distribute to hodlers, 2% team fund, 1% burn, 1% add back to liquidity pool', {

  })
})

bot.command('web', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'https://shibaluffyinu.org', {

  })
})

bot.command('twitter', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'https://twitter.com/shibaluffyinu', {

  })
})
bot.command('medium', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'https://medium.com/@shibaluffyinu', {

  })
})
bot.command('help', ctx => {
  console.log(ctx.from)
  bot.telegram.sendMessage(ctx.chat.id, 'contract | tokenomics | info | ido | web | twitter | medium', {

  })
})


bot.launch();
