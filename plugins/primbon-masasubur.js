import { Primbon } from 'scrape-primbon'


let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                
                const primbon = new Primbon()           
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}

handler.help = ['subur'].map(v => v + ' <12, 1, 2022, 28>')
handler.tags = ['primbon']
handler.command = /^(subur)$/i

export default handler
