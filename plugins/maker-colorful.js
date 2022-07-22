import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix, command}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}wait`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    await m.reply('ditunggu dulu kak...')

let gbr = await conn.getFile(`https://violetics.pw/api/photofilter/warm-sunset?apikey=beta&image=${url}`)
 
  conn.sendFile(m.chat, gbr.data, 'ihik.jpg', `Tukang Edit Manual`, m, false)
 
}
 
handler.help = ['sunset'])
handler.tags = ['maker']

handler.command = /^sunset/i
export default handler
