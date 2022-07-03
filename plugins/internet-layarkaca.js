import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Film Yang Ingin Kamu Cari*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/lk21/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, author, stars, url, thumbnail } = json.result[0]
// let res2 = await fetch(`https://myanimelist.net/anime/${mal_id}`)
// if (!res2.ok) throw await res2.text()
// let html = await res2.text()
let animeingfo = `✨ *Judul:* ${title}
🎆 *Sutradara:* ${author}
👥 *Aktor:* ${stars}
🌐 *URL*: ${url}`
conn.sendFile(m.chat, thumbnail, '', animeingfo, m)
}
handler.help = ['lk21'].map(v => v + ' <query>')
handler.tags = ['internet']
handler.command = /^(lk21)$/i
export default handler
