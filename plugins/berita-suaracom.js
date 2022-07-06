import fetch from 'node-fetch'
import { suaracom } from '@bochilteam/scraper'

let handler = async(m, { conn }) => {
   var a = await suaracom()
   var b = JSON.parse(JSON.stringify(a))
//    var c = await conn.rand(b)
   var c = b[Math.floor(Math.random() * b.length)]
   var { title, link, image, description, date, label } = c
   var sell = `📺 *Suara News*
🌐 *Berita:* ${title}
📄 *Deskripsi:* ${description}
⌚ *Date:* ${date}
🛰️ *Source Url:* ${link}`.trim()
   conn.sendButton(m.chat, `${sell}`, wm, null, [['Suara News', '/suara']], m)

}
handler.help = ['suara']
handler.tags = ['berita']
handler.command = /^suara(news)?$/i
export default handler
