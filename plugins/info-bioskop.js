import { bioskop } from '@bochilteam/scraper'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `${usedPrefix}${command}`
    console.log(await bioskop())
    conn.reply(m.chat, bioskop, m)
}

handler.help = ['jadwalbioskop']
handler.tags = ['info']
handler.command = /^(bioskop)$/i

export default handler
