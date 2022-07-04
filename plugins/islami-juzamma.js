let handler = async (m, { args, usedPrefix, command }) => {

let er = `Juz Amma yang tersedia berformat : pdf, docx, pptx, xlsx
Contoh: ${usedPrefix + command} pdf 
`.trim()
    if (!args[0]) throw er
	
    switch (args[0].toLowerCase()) {
        case 'pdf':
        case 'docx':
        case 'pptx':
        case 'xlsx':       
            let text = args.slice(1).join(' ')
            let pilih = args[0].toLowerCase()
		await m.reply('baik,ditunggu dulu kak...')	
		let hasil = await conn.getFile(`https://github.com/burhansyam/media/blob/main/juz-amma-arab-latin-indonesia.${pilih}`)
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
