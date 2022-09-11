import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nomor XL* \n Contoh : .fupxl 6281808032100`
  await m.reply('🕵️ Sabar kak, saya cek dulu...')
let res = await fetch(`https://titib.my.id/bot/xl/?no=${text}`)
let json = await res.json()
let hajar = json.result
           conn.reply(m.chat, hajar, m)
}

handler.help = ['fupxl <nomorxl>']
handler.tags = ['info']
handler.command = /^(fupxl)$/i

export default handler
