import { Primbon } from 'scrape-primbon'


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Contoh : ${usedPrefix + command} Icha, 6, 8, 2013`
                let [nama, tgl, bln, thn] = text.split`,`
                const primbon = new Primbon()   
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}

handler.help = ['sifat'].map(v => v + ' <nama, 6, 8, 2013>')
handler.tags = ['primbon']
handler.command = /^(sifat)$/i

export default handler
