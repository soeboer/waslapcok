import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Film Yang Ingin Kamu Cari*`
await m.reply('saya carikan dulu bestie...')
let res = await fetch(global.API('https://indotv.my.id', '/bot/pelem/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, thumb, views, genre, quality, country, duration, release, result } = json.result
let dondot = json.result.result.map((v, i) => `${i + 1}.📺 Server : ${v.name}\n🔑 Link : ${v.url}`).join('\n\n')
let peleme = `
✨ *Judul:* ${title}
🌐 *Tahun Rilis*: ${release}
💚 *Durasi:* ${duration}
❤️ *Kualitas:* ${quality}
👥 *Rating & Sutradara:* ${genre}
💬 *Genre:* ${views}
💋 *Link Download*:\n ${dondot}`
conn.sendFile(m.chat, thumb, '', peleme, m)
}
handler.help = ['film <judul>']
handler.tags = ['pencarian']
handler.command = /^(film)$/i

export default handler
