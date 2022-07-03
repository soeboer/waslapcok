import { Primbon } from 'scrape-primbon'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Example : ${usedPrefix + command} Raissabilla`
                                const primbon = new Primbon()   
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
handler.help = ['artinama'].map(v => v + ' [nama]')
handler.tags = ['primbon']
handler.command = ['artinama']

export default handler
