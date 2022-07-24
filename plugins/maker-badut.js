import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}.sunset`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let urle = await uploadImage(img)
    await m.reply('Sabar bestie,dibuatkan dulu yaak...')

 let res = await fetch(`https://docs-jojo.herokuapp.com/api/clown-face-in-hole?image_url=${urle}`)
 
 	if (res.status !== 200) throw res.statusText
	conn.sendMessage(m.chat, { image: { url: res.url }}, { quoted: m })

}
handler.help = ['badut']
handler.tags = ['maker']
handler.command = /^(badut)$/i
handler.fail = null


export default handler
