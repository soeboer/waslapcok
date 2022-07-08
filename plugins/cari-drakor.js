import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Drakor Yang Ingin Kamu Cari*\nContoh .drakor insider`
let res = await fetch(global.API('https://docs-jojo.herokuapp.com', '/api/drakor', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let url = json.url
let image = json.image
let years = json.years
let title = json.title
let genre = json.genre
let duration = json.duration
let synopsis = json.synopsis
let cast = json.cast

// ❤️ *Artis:* ${cast}

let drakoringfo = `
✨ *Judul:* ${title}
🎆 *Produksi:* ${years}
💬 *Genre:* ${genre}
💌 *Durasi:* ${duration}
👥 *Artis:* ${cast}
💚 *Sinopsis:* ${synopsis}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, image, '', drakoringfo, m)
}
handler.help = ['drakor <judul>']
handler.tags = ['pencarian']
handler.command = /^(drakor)$/i
export default handler
