let handler = async (m, { conn, text, usedPrefix, command }) => {
  
let oh = `Contoh : ${usedPrefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
	
// 		conn.sendFile(m.chat, {document: yy.data, mimetype: 'application/pdf', fileName: `iqro${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))	
		let hasil = await conn.getFile(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		let caption = `*Iqro*\n\nJilid : ${text}`
                conn.sendFile(m.chat, hasil.data, `iqro-jilid-${text}.pdf`, caption, m)
		}
handler.help = ['iqro']
handler.tags = ['islami']
handler.command = /^(iqro)$/i

export default handler
