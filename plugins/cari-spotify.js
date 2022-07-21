import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Lagu Yang Ingin Kamu Cari*`

let res = await fetch(`https://api.zekais.com/spotify?apikey=zekais&query=${text}`)
if (!res.ok) throw await res.text()
// let json = await res.json()
let { title, thumb, result, artists, popularity, duration } = await res.json()

let spotipy = `✨ *Judul:* ${title}
🎆 *Artis:* ${artists}
💌 *Rating:* ${popularity}
💬 *Durasi:* ${duration}
🌐 *Download *: ${result}`
conn.sendFile(m.chat, thumb, '', spotipy, m)
}

handler.help = ['spotify <judul>']
handler.tags = ['pencarian']
handler.command = /^(spotify|music)$/i

export default handler
