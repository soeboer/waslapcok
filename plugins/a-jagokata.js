import { quotes } from './lib/jagokata.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Contoh : ${usedPrefix + command} makan`
                const quotes = new quotes()   
                let anu = await quotes.data(text)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Quotes :* ${anu.message.quote}\n⭔ *Penulis :* ${anu.message.author}\n⭔ *Biografi :* ${anu.message.bio}`, m)
}


handler.help = ['jagokata'].map(v => v + ' [name]')
handler.tags = ['fun']
handler.command = ['jagokata']

export default handler
