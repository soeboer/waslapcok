import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {  
    let er = `
▢ *List zodiak*
- Capricorn
- Aquarius
- Pisces
- Aries
- Taurus
- Gemini
- Cancer
- Leo
- Virgo
- Libra
- Scorpio
- Sagitarius
contoh:
${usedPrefix + command} Taurus
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'capricorn':
        case 'aquarius':
        case 'pisces':
        case 'aries':
        case 'taurus':
        case 'gemini':
        case 'cancer':
        case 'leo':     
        case 'libra':
        case 'scorpio':
        case 'sagitarius':     		    
            let text = args.slice(1).join(' ')
            let pilih = args[0].toLowerCase()
	    
await m.reply('saya proses dulu kak...')

let res = await fetch(global.API('https://api.burhansyam.com', '/bot/zodiak', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { image, hari_ini, description, angka_keberuntungan, peribahasa_cina, about } = json.result
let bintul = `✨ *Bintang:* ${hari_ini}
🎆 *Deskripsi:* ${description}
👥 *Keberuntungan:* ${angka_keberuntungan}
🐦 *Peribahasa*: ${peribahasa_cina}
🌐 *Tentang*: ${about}
`

conn.sendFile(m.chat, image, '', bintul, m)
//   await m.reply(bintul)
		    
            break
        default:
            throw er
    }
}

handler.help = ['zodiakharian <zodiak>']
handler.tags = ['fun']
handler.command = /^(zodiakharian)$/i
export default handler
