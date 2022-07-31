import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Lagu yang Kamu Cari*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/chord/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { id, type, slug, url, status, title, title_plain, image_url, content } = json.posts[0]

let koenci = `✨ *Judul:* ${title}
${content}`
// conn.sendFile(m.chat, image_url, '', animeingfo, m)
            conn.reply(m.chat, koenci, m)

}
handler.help = ['kuncigitar <lagu>']
handler.tags = ['pencarian']
handler.command = /^(kuncigitar)$/i
export default handler
