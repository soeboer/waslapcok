import fetch from 'node-fetch'
import { antaranews } from '@bochilteam/scraper'

let handler = async(m, { conn }) => {
   var a = await antaranews()
   var b = JSON.parse(JSON.stringify(a))
//    var c = await conn.rand(b)
   var c = b[Math.floor(Math.random() * b.length)]
   var { title, link, image, date } = c
   var sell = `📺 *Antara News*
🌐 *Berita:* ${title}
⌚ *Date:* ${date}
🛰️ *Source Url:* ${link}`.trim()
   conn.sendButton(m.chat, `${sell}`, wm, null, [['AntaraNews', '/liputan6']], m)

}
handler.help = ['antara']
handler.tags = ['berita']
handler.command = /^antara(news)?$/i
export default handler
