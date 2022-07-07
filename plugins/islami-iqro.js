let handler = async (m, { args, usedPrefix, command }) => {
	
let er = `Iqro yang tersedia jilid : 1, 2, 3, 4, 5, 6
Contoh: ${usedPrefix + command} 3 
`.trim()
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':         
            let text = args.slice(1).join(' ')
            let pilih = args[0].toLowerCase()
		await m.reply('ditunggu dulu kak...')	
		let hasil = await conn.getFile(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${pilih}`)
		let caption = `*Iqro*\n\nJilid : ${pilih}`
                conn.sendFile(m.chat, hasil.data, `iqro-jilid-${pilih}.pdf`, caption, m)
	break
        default:
            throw er
    }
		}
handler.help = ['iqro <jilid>']
handler.tags = ['islami']
handler.command = /^(iqro)$/i

export default handler
