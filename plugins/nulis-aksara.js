import fetch from ('node-fetch')
import { 
    latinToAksara,
    aksaraToLatin
} from '@bochilteam/scraper'

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `
╭─「 Opsi 」
│ latinToAksara
│ aksaraToLatin
╰────

Contoh penggunaan:
${usedPrefix + command} latinkejawa selamat pagi
    `.trim()
    if (!args[0]) throw er
    switch (args[0].toLowerCase()) {
        case 'latinToAksara':
        case 'aksaraToLatin':
            let text = args.slice(1).join(' ')
            let res = await fetch(API('xteam', '/aksara/' + args[0].toLowerCase(), { text }, 'APIKEY'))
            if (!res.ok) throw await res.text()
            let json = await res.json()
            if (!json.status) throw json
            m.reply(json.message)
            break
        default:
            throw er
    }
}
handler.help = ['aksara'].map(v => v + ' <opsi> <teks>')
handler.tags = ['nulis']
handler.command = /^aksara$/i

export default handler
