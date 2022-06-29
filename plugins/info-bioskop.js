import fetch from 'node-fetch'
import { bioskop, bioskopNow } from '@bochilteam/scraper'


let handler = async (m, { conn, usedPrefix, command }) => {

//     if (!text) throw `Use example ${usedPrefix}${command} Bot`
    const result = await bioskopNow
    
await conn.sendButton(m.chat, result, wm, [['Menu', '.menu']], m)
}

handler.help = ['jadwalbioskop']
handler.tags = ['info']
handler.command = /^(bioskop)$/i

export default handler