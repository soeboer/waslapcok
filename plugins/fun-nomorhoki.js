import { nomorhoki } from '@bochilteam/scraper'

let handler = async (m, { command }) => {
//     if (!text) throw `Example use ${usedPrefix}${command} halo`
    const res = await nomorhoki
    m.reply(`${res}`.trim())
}

handler.help = ['nomorhoki']
handler.tags = ['fun']
handler.command = /^(nomorhoki)$/i

export default handler
