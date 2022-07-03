import fetch from 'node-fetch'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
let oh = `Contoh : ${usedPrefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		let yy = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		conn.reply(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
handler.help = ['iqro']
handler.tags = ['islami']
handler.command = /^(iqro)$/i

export default handler
