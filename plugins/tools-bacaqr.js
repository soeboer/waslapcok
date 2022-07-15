import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}wait`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
 let res = await fetch(`https://docs-jojo.herokuapp.com/api/qr_read?image_url=${url}`)
 let json = await res.json()
 let { raw_text } = json.result
 let pecah = `
🚧 *Bacaan QR    :* \n${raw_text}`
             conn.reply(m.chat, pecah, m)
}

handler.help = ['bacaqr <reply>']
handler.tags = ['tools']
handler.command = /^(bacaqr)$/i

export default handler
