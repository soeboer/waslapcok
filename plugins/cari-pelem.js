import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Film Yang Ingin Kamu Cari*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/pelem/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, thumb, views, genre, quality, country, duration, release, result } = json.result
let dondot = json.result.result.map((v, i) => `${i + 1}.📺 Server : ${v.name}\n🔑 Link : ${v.url}`).join('\n\n')
let animeingfo = `✨ *Title:* ${title}
💬 *Genre:* ${genre}
💌 *Rating:* ${views}
❤️ *Kualitas:* ${quality}
👥 *Negara:* ${country}
💚 *Durasi:* ${duration}
🌐 *Tahun*: ${release}
💋 *Download*: ${dondot}`
conn.sendFile(m.chat, thumb, '', animeingfo, m)
}
handler.help = ['pelem <judul>']
handler.tags = ['pencarian']
handler.command = /^(pelem)$/i

export default handler
