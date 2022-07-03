import { Primbon } from 'scrape-primbon'


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Contoh : ${usedPrefix + command} makan`
                const primbon = new Primbon()   
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}

handler.help = ['artimimpi'].map(v => v + ' <Apa>')
handler.tags = ['primbon']
handler.command = /^(artimimpi)$/i

export default handler
