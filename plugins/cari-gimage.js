import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Contoh ${usedPrefix}${command} Nastar`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🔎 *Result From:* ${text}
🌎 *Search:* Google
`, author, link, link, '🔗 𝚄𝚁𝙻', null, null, [
['🔄 NEXT 🔄', `/imagen ${text}`]
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['pencarian']
handler.command = /^(gimage|image|imagen)$/i
export default handler
