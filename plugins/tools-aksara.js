import { latinToAksara } from '@bochilteam/scraper'

// let handler = async (m, { conn, text, args, usedPrefix, command }) => {

//     if (!text) throw `.aksara latinToAksara${usedPrefix}${command} Tulisan`
//     const result = await latinToAksara(text)
    
// await conn.sendButton(m.chat, result, wm, [['Menu', '.menu']], m)
// }

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    const res = await latinToAksara(text)
    m.reply(`${res}`.trim())
}

handler.help = ['aksara'].map(v => v + ' <opsi> <teks>')
handler.tags = ['tools']
handler.command = /^aksara$/i

export default handler
