import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let urle = await uploadImage(img)
    await m.reply('Sabar bestie,dibuatkan dulu yaak...')

 let res = await fetch(`https://indotv.my.id/bot/pho.to/combo6/index.php?url=${urle}`)
 
 	if (res.status !== 200) throw res.statusText
	conn.sendMessage(m.chat, { image: { url: res.url }}, { quoted: m })

}
handler.help = ['combo6']
handler.tags = ['maker']
handler.command = /^(combo6)$/i
handler.fail = null


export default handler
