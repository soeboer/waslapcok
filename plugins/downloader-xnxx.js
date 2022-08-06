import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk Download link XNXX *\n\ncontoh:\n${usedPrefix + command} https://www.xnxx.com/video-10795jab/sex_in_japan`
    await m.reply('💻 Sabar bestie saya cek dulu...')
    let res = await fetch(global.API('https://api.burhansyam.com', '/bot/xnxx/down/', { q: text }))
//     if (res.status != 200) throw await res.text()
    let json = await res.json()
//     if (!json.status) throw json
  let { title, url, duration, image, info, files } = json.result
  let kuali = json.files.map((v, i) => `${i + 1}.💾 SD: ${v.low}\n💽 HD: ${v.high}\n🎥 Streaming: ${v.hls}`).join('\n\n')
  let ihik = `*Detail Video ${title}*
🚧 *Link    :* ${url}
⛽️ *Durasi  :* ${duration}
📆 *Info    :* ${info}
🚀 *Downoad  :* \n${kuali}`
  
//     m.reply(papah)
//     	          conn.reply(m.chat, mes, m)
  conn.sendFile(m.chat, image, '', ihik, m)

}

handler.help = ['xd <link xnxx>']
handler.tags = ['downloader']
handler.command = /^xd/i
export default handler
