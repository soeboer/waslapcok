import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nama Kota*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/cuaca/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { name, weather[0]description, main.temp, main[temp_min], main.temp_max, main.humidity, wind.speed } = json.results

let madang = `✨ *Kota :* ${name}
🎆 *Cuaca :* ${weather[0].description}
💬 *Hasil :* ${main.temp}
💌 *Level :* ${main[temp_min]}
❤️ *Angin :* ${main.humidity}
👥 *link :* ${wind.speed}`
conn.sendFile(m.chat, thumb, '', madang, m)
}

handler.help = ['cuaca <kota>']
handler.tags = ['info']
handler.command = /^cuaca$/i
export default handler
