import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
let res = await fetch(global.API('https://api.burhansyam.com/bot/gempa.json'))
if (!res.ok) throw await res.text()
let json = await res.json()
let { tanggal, waktu, lokasi, kedalaman, koordinat, dirasakan, potensi, image_url, magnitude } = json.results[0]
let html = await res.text()
let ingfo = `✨ *Title:* ${title}
🎆 *Tanggal:* ${tanggal}
💬 *Waktu:* ${waktu}
💌 *Lokasi:* ${lokasi}
❤️ *Kedalaman:* ${kedalaman}
👥 *Koordinat:* ${koordinat}
💚 *Dirasakan:* ${dirasakan}
🌐 *Potensi*: ${potensi}`
conn.sendFile(m.chat, image_url, '', ingfo, m)
}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
