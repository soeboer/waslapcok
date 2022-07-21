import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan judul Lagunya`
let res = await fetch(`https://api.zekais.com/spotify?query=${text}&apikey=zekais`)
  if (!res.ok) throw await res.text()
await m.reply('siap saya carikan dulu bestie...')
  let json = await res.json()
let result = json.result
let artists = json.artists

conn.sendFile(m.chat, result, `${text}.mp3`, `${artists}`, m)

}
handler.help = ['spotify <judul>']
handler.tags = ['pencarian']
handler.command = /^(spotify|music)$/i

export default handler
