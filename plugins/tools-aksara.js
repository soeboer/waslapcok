import { latinToAksara } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {

    if (!text) throw `.aksara latinToAksara${usedPrefix}${command} Tulisan`
    const result = await latinToAksara(text)
    
await conn.sendButton(m.chat, result, wm, [['Menu', '.menu']], m)
}
handler.help = ['aksara'].map(v => v + ' <opsi> <teks>')
handler.tags = ['tools']
handler.command = /^aksara$/i


export default handler
