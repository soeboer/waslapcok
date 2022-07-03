import { Primbon } from 'scrape-primbon'


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Contoh : ${prefix + command} 4, 7, 2022`
                let [tgl, bln, thn] = text.split`,`
                const primbon = new Primbon()    
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}

handler.help = ['mancing'].map(v => v + ' <4, 7, 2022>')
handler.tags = ['primbon']
handler.command = /^(mancing)$/i

export default handler
