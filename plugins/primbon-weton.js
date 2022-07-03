import { Primbon } from 'scrape-primbon'


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
                if (!text) throw `Contoh : ${usedPrefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                const primbon = new Primbon()    
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
  
}

handler.help = ['weton'].map(v => v + ' <6, 8, 2013>')
handler.tags = ['primbon']
handler.command = /^(weton)$/i

export default handler
