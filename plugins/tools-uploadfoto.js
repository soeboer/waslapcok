import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let urle = await uploadImage(img)
    await m.reply('Sabar bestie,saya Upload dulu yaak...')
  
let peroses = `🎆 *Proses Upload Selesai...*
🌐 *Link Gambar*: ${urle}`

conn.sendFile(m.chat, img, '', peroses, m)
  
  
}
handler.help = ['uploadfoto']
handler.tags = ['tools']
handler.command = /^(uploadfoto)$/i
handler.fail = null


export default handler
