import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nama Kota*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/cuaca/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { name, base, thumb } = json.results[0]
let madang = `✨ *Kota :* ${name}
🎆 *Umum :* ${base}`
conn.sendFile(m.chat, thumb, '', madang, m)
}

handler.help = ['cuaca <kota>']
handler.tags = ['info']
handler.command = /^cuaca$/i

export default handler
