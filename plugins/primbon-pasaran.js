import { Primbon } from 'scrape-primbon'


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  
                if (!text) throw `Contoh : ${usedPrefix + command} 4, 7, 2022`
                let [tgl, bln, thn] = text.split`,`
                const primbon = new Primbon()    
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Pranolo :* ${anu.message.tanggal}\n⭔ *Cacahe Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Dino :* ${anu.message.watak_hari}\n⭔ *Nogo Dino :* ${anu.message.naga_hari}\n⭔ *Jam Becik :* ${anu.message.jam_baik}`, m)
  
}

handler.help = ['pasaran'].map(v => v + ' <4, 7, 2022>')
handler.tags = ['primbon']
handler.command = /^(pasaran)$/i

export default handler
