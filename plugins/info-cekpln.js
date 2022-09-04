import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'ID Pelanggannya ? \n contoh : .cekpln 521050558080', m)
  await m.reply('Sabar bestie saya cek dulu...')
let res = await fetch(`https://api.beetv.my.id/bot/pln/?id=${text}`)
let json = await res.json()
let { bill_number, period, print } = json
let jembat = `⚡️ *${print}*`      
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, jembat, m)
}

handler.help = ['cekpln <ID Pelanggan>']
handler.tags = ['info']
handler.command = /^(cekpln)$/i

export default handler
