import { bioskopNow } from '@bochilteam/scraper'

let handler = async (m, { command }) => {
//     if (!text) throw `Example use ${usedPrefix}${command} halo`
    const res = await bioskopNow
    m.reply(`${res}`.trim())
}

handler.help = ['jadwalbioskop']
handler.tags = ['info']
handler.command = /^(bioskop)$/i

export default handler
