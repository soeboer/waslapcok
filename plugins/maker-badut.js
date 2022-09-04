import fetch from 'node-fetch'
// import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}.vector`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
//     let img = await q.download()
//     let urle = await uploadImage(img)
        let urle = await webp2png(await q.download())
    await m.reply('Sabar bestie,dibuatkan dulu yaak...')

 let res = await fetch(`https://api.beetv.my.id/bot/pho.to/badut/index.php?url=${urle}`)
 
 	if (res.status !== 200) throw res.statusText
	conn.sendMessage(m.chat, { image: { url: res.url }}, { quoted: m })

}
handler.help = ['badut']
handler.tags = ['maker']
handler.command = /^(badut)$/i
handler.fail = null


export default handler
