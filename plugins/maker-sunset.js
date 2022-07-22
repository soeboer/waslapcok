import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, usedPrefix}) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Reply Foto/Kirim Foto Dengan Caption ${usedPrefix}.sunset`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let urle = await uploadImage(img)
    await m.reply('ditunggu dulu kak...')

 let res = await fetch(`https://violetics.pw/api/photofilter/warm-sunset?apikey=beta&image=${urle}`)
 
 	if (res.status !== 200) throw res.statusText
	conn.sendMessage(m.chat, { image: { url: res.url }}, { quoted: m })
	
	
//  let json = await res.json()
//  let { raw_text } = json.result
//  let kodene = `${raw_text}`
//  let perintahe = '.cekqr'
 
//  conn.sendButton(m.chat, `Kode QR Aset : ${kodene}`, '@burhansyam', null, [['Cek QR Aset', `${perintahe} ${kodene}`]], m)
 
// conn.sendButton(m.chat, `${raw_text}`, pecah, pecah, [['cek nop', `${command} ${pecah}`]], m)
//             conn.reply(m.chat, raw_text, m)
}

handler.help = ['sunset <reply>']
handler.tags = ['maker']
handler.command = /^(sunset)$/i

export default handler
