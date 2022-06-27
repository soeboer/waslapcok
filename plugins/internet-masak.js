import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nama Resep Ingin Kamu Cari*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/resep/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { judul, waktu_masak, hasil, tingkat_kesulitan, thumb, bahan, langkah_langkah } = json.results[0]
let madang = `✨ *Judul :* ${judul}
🎆 *Durasi :* ${waktu_masak}
💬 *Hasil :* ${hasil}
💌 *Level :* ${tingkat_kesulitan}
❤️ *Bahan :* ${bahan}
👥 *Proses :* ${langkah_langkah}`
conn.sendFile(m.chat, thumb, '', madang, m)
}

handler.help = ['resep <makanan>', 'masak <makanan>']
handler.tags = ['internet']
handler.command = /^(resep|masak)$/i

export default handler
