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
        case 'virgo':		    
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

let url = await fetch(global.API('https://api.beetv.my.id', '/bot/zodiak/', { q: pilih }))
// if (!res.ok) throw await res.pilih()
let json = await url.json()
let { image, hari_ini, description, angka_keberuntungan, peribahasa_cina, about } = json.bintang[0]
let bintul = `✨ *Bintang:* ${hari_ini}
🎆 *Deskripsi:* ${description}
👥 *Keberuntungan:* ${angka_keberuntungan}
🐦 *Peribahasa*: ${peribahasa_cina}
🌐 *Catatan*: ${about}
`

// conn.sendFile(m.chat, image, '', bintul, m)
m.reply(bintul)
		    
            break
        default:
            throw er
    }
}

handler.help = ['zodiakharian <zodiak>']
handler.tags = ['fun']
handler.command = /^(zodiakharian)$/i
export default handler
