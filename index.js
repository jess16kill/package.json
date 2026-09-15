const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'loswachoss.aternos.me',
  port: 55252,
  version: '1.21.5',
  auth: 'offline',
  username: 'BotAFK'
})

bot.on('spawn', () => {
  console.log('Bot conectado y AFK.')
})

bot.on('kicked', (reason) => {
  console.log('Bot expulsado:', reason)
})

bot.on('error', (err) => {
  console.log('Error:', err.message)
})

bot.on('end', () => {
  console.log('Bot desconectado.')
})
