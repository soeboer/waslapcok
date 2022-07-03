import fetch from 'node-fetch'
import { CNNNews } from 'dhn-api'


let handler = async(m, { conn }) => {
     let json = await CNNNews()
     let json = src[Math.floor(Math.random() * src.length)]
     
    let berita = `📺 *CNN News*
    
📢 *Berita:* ${json.berita}
🛰 *Source Url:* ${json.berita_url}`
   conn.sendButton(m.chat, berita, wm, json.berita_thumb, [['CNN News', '.cnnnews']], m)
}
handler.help = ['cnn']
handler.tags = ['berita']
handler.command = /^cnn(news)?$/i

export default handler
