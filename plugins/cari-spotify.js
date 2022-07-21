import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan judul Lagunya`
let res = await fetch(`https://api.zekais.com/spotify?query=${text}&apikey=zekais`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
//   if(!json.data[0]) throw json
  let { title, artists, duration, thumb, popularity, result } = json
let spotifyinfo = `✨️ *Title:* ${title}
🗣️ *Artists:* ${artists}
🎆️ *Durasi:* ${duration}
💚️ *Rating:* ${popularity}`

//   await conn.sendFile(m.chat, thumb, '', spotifyinfo, m)
// conn.sendFile(m.chat, result, 'spotify.mp3', spotifyinfo, m)
conn.sendFile(m.chat, result, `${title}.mp3`, `${artists}`, m)

}
handler.help = ['spotify <judul>']
handler.tags = ['pencarian']
handler.command = /^(spotify|music)$/i

export default handler
