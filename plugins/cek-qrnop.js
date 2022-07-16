import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}wait`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    await m.reply('ditunggu dulu maszeeh...')

 let res = await fetch(`https://docs-jojo.herokuapp.com/api/qr_read?image_url=${url}`)
 let json = await res.json()
 let { raw_text } = json.result
 let kodene = `${raw_text.replace('https://bkad.gunungkidulkab.go.id/cek-pbb/?nop=', '')}`
 let perintahe = '.ceknop'
//  conn.sendButton(m.chat, 'Pembaca QR NOP : ${kodene}', '@burhansyam', null, [['Cek NOP', `${usedPrefix + perintahe + kodene}`]], m)
 
// conn.sendButton(m.chat, `${raw_text}`, pecah, pecah, [['cek nop', `${command} ${pecah}`]], m)
            conn.reply(m.chat, raw_text, m)
}

handler.help = ['qrnop <reply>']
handler.tags = ['info']
handler.command = /^(qrnop)$/i

export default handler
Footer
