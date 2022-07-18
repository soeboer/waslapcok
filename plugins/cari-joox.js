import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Judul Lagu Yang Ingin Kamu Cari*`
await m.reply('siap kirim...')
let sound = await conn.getFile(`https://violetics.pw/api/media/joox-play?apikey=beta&query=${text}`)
if (!res.ok) throw await res.text()
let json = await res.json()
let { malbum, msinger, mp3Url, msong, public_time, imgSrc } = json.results

		let caption = `*Lagu :* ${msong}\n*Album :* ${malbum}\n*Artis :* ${msinger}\n*Tahun :* ${public_time}`
                conn.sendFile(m.chat, mp3Url, `${msong}.mp3`, caption, m)
}
handler.help = ['joox <lagu>']
handler.tags = ['pencarian']
handler.command = /^(joox)$/i
export default handler
