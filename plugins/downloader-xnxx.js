import fetch from 'node-fetch'

// let handler = async (m, { conn, text, usedPrefix, command }) => {
let handler = async(m, { conn, text }) => {
    if (!text) throw `*Perintah ini untuk Download link XNXX*\nContoh:\n.xd https://www.xnxx.com/video-10795jab/sex_in_japan`
    await m.reply('💻 Sabar bestie saya cek dulu...')
    let res = await fetch(global.API('https://api.burhansyam.com', '/bot/xnxx/down/', { q: text }))
//     if (res.status != 200) throw await res.text()
    let json = await res.json()
//     if (!json.status) throw json
  let { title, url, duration, image, info } = json.result
  let low = json.result.files.low
  let high = json.result.files.high
  let hls = json.result.files.hls   
  let ihik = `*🎞 Detail Video ${title}*
🚧 *Link    :* ${url}
⛽️ *Info    :* ${info}
💾 *Downoad SD :* ${low}
💽 *Downoad HD :* ${high}
🎥 *Streaming :* ${hls}`
  
//     m.reply(papah)
//     	          conn.reply(m.chat, mes, m)
  conn.sendFile(m.chat, image, '', ihik, m)

}

handler.help = ['xd <link xnxx>']
handler.tags = ['downloader']
handler.command = /^xd/i
export default handler
