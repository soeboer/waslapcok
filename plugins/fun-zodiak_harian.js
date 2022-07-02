import fetch from 'node-fetch'
import cheerio from 'cheerio'
import { JSDOM } from 'jsdom'

let handler = async (m, { args, usedPrefix, command }) => {
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
- Sagittarius
- Capricorn`
    
contoh:
${usedPrefix + command} taurus
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
        case 'virgo':
        case 'libra':
        case 'scorpio':
        case 'sagittarius':
        case 'capricorn':		
	            let text = args.slice(1).join(' ')
		    
// 	if (!text) throw `Ulangi dengan menambahkan zodiak\n*Contoh* : ${usedPrefix + command} libra


	try {
		let res = await fetch(`https://www.fimela.com/zodiak/${text}`)
		if (!res.ok) throw await res.text()
		let html = await res.text()
		let { document } = new JSDOM(html).window
		let thumb = document.querySelector('body > div > div > div div > div > a > img').src
		// let judul = document.querySelector('body > div > div.container-main > div.container-article > div div.zodiak--content-header__right > div.zodiak--content-header__text > h5').textContent.trim()
		// let tanggal = document.querySelector('body > div > div > div > div > div > div > span').textContent.trim()

		let main = document.querySelector('body > div > div > div > div > div > div')
		let nomer_ = main.find('div:nth-child(1) > div.zodiak--content__content > span').textContent.trim()
		let umum = main.find('div:nth-child(1) > div.zodiak--content__content > p').textContent.trim() || undefined
		let love = main.find('div:nth-child(2) > div.zodiak--content__content > p').textContent.trim() || undefined
		let keuangan = $('body > div > div > div > div > div > div').find('div:nth-child(3) > div.zodiak--content__content > p').textContent.trim() || undefined
		let rezeki = keuangan.replace('Couple', '\n\n- Couple').replace('Single', '- Single')
		let caption = `${umum} Nomor keberuntungan kamu adalah *${nomer_}*
		
▢ *Asmara* : 
${love}

▢ *Keuangan* : 
${rezeki}`

// 		conn.sendFile(m.chat, thumb, 'zodiak.jpeg', caption, m)
		  conn.sendFile(m.chat, thumb, 'zodiak.jpg', `Zodiak`, m, false)
// 	} catch (e) {
// 		m.reply('Hasil tidak di temukan')
// 	}
// }
		            break
        default:
            throw er
    }
}

handler.help = ['zodiakharian <zodiak>']
handler.tags = ['fun']
handler.command = /^(zodiakharian)$/i
export default handler
