import { bioskop } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    
    if (!text) throw `Use example ${usedPrefix}${command} Bot`
    const result = await bioskop(text)

await conn.sendButton(m.chat, result, wm, [['Menu', '.menu']], m)
}

handler.help = ['jadwalbioskop']
handler.tags = ['info']
handler.command = /^(bioskop)$/i

export default handler
