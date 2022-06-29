import { textpro }  from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Example use ${usedPrefix}${command} halo`
    const res = await textpro(text)
    m.reply(`${res}`.trim())
}

handler.help = ['textpro <teks>']
handler.tags = ['nulis']
handler.command = /^textpro$/i

export default handler
