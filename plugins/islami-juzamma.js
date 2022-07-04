let handler = async (m, { args, usedPrefix, command }) => {

let er = `Juz-Amma tersedia dlm format : PDF, DOCX
Contoh: ${usedPrefix + command} pdf 
`.trim()
    if (!args[0]) throw er
	
    switch (args[0].toLowerCase()) {
        case 'pdf':
        case 'docx':
            let text = args.slice(1).join(' ')
            let pilih = args[0].toLowerCase()
		await m.reply('baik,ditunggu dulu kak...')	
		let hasil = await conn.getFile(`https://github.com/burhansyam/media/blob/main/juz-amma-arab-latin-indonesia.${pilih}?raw=true`)
		let caption = `*Juz-Amma*\n\nFormat : ${pilih}`
                conn.sendFile(m.chat, hasil.data, `Juz-Amma.${pilih}`, caption, m)
	break
        default:
            throw er
    }
		}
handler.help = ['juzamma']
handler.tags = ['islami']
handler.command = /^(juzamma)$/i

export default handler
