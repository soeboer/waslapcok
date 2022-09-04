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

//  let res = await fetch(`https://docs-jojo.herokuapp.com/api/qr_read?image_url=${url}`)
//  let json = await res.json()
//  let { raw_text } = json.result
 let res = await fetch(`https://api.beetv.my.id/bot/qr/?qrcode=${url}`)
 let json = await res.json()
 let { data } = json 
  
 let kodene = `${data.replace('https://bkad.gunungkidulkab.go.id/lp-sppt/?nopen=', '')}`
 let perintahe = '.cekpapah'
 
 conn.sendButton(m.chat, `Lacak Layanan SiPapah : ${kodene}`, 'Coded by @burhansyam', null, [['Lacak SiPAPAH', `${perintahe} ${kodene}`]], m)
 
// conn.sendButton(m.chat, `${raw_text}`, pecah, pecah, [['cek nop', `${command} ${pecah}`]], m)
//             conn.reply(m.chat, raw_text, m)
}

handler.help = ['qrpapah <upload/balas foto>']
handler.tags = ['bkad']
handler.command = /^(qrpapah)$/i

export default handler
