import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[βINFOβ] Masukan Judul Film Yang Ingin Kamu Cari*`
await m.reply('saya carikan dulu bestie...')
let res = await fetch(global.API('https://indotv.my.id', '/bot/pelem/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, thumb, views, genre, quality, country, duration, release, result } = json.result
let dondot = json.result.result.map((v, i) => `${i + 1}.πΊ Server : ${v.name}\nπ Link : ${v.url}`).join('\n\n')
let peleme = `
β¨ *Judul:* ${title}
π *Tahun Rilis*: ${release}
π *Durasi:* ${duration}
β€οΈ *Kualitas:* ${quality}
π₯ *Rating & Sutradara:* ${genre}
π¬ *Genre:* ${views}
π *Link Download*:\n ${dondot}`
conn.sendFile(m.chat, thumb, '', peleme, m)
}
handler.help = ['film <judul>']
handler.tags = ['pencarian']
handler.command = /^(film)$/i

export default handler
