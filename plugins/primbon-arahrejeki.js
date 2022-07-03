import { Primbon } from 'scrape-primbon'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Contoh : ${usedPrefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                const primbon = new Primbon()   
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}

handler.help = ['arahrejeki'].map(v => v + ' <12, 1, 2022>')
handler.tags = ['primbon']
handler.command = /^(arahrejeki)$/i

export default handler
