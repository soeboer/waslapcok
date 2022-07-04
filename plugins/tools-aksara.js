import { latinToAksara } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    const res = await latinToAksara(text)
    m.reply(`${res}`.trim())
}

handler.help = ['aksara <teks>']
handler.tags = ['tools']
handler.command = /^aksara$/i

export default handler
