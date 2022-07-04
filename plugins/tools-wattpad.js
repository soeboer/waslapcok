import { WattPads } from '@dhnapi/wattpad.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Contoh : ${usedPrefix + command} love`
                                let wattpad = new WattPads(); 
                let cari = wattpad.set('query', 'text');
                let anu = await wattpad.search(cari);
                if (anu.status == false) return m.reply(anu.response)
                conn.reply(m.chat, `⭔ *Judul :* ${anu.response}\n⭔ *Info :* ${anu.response}\n⭔ *Deskripsi :* ${anu.response}`, m)
}
handler.help = ['wattpadd'].map(v => v + ' [nama]')
handler.tags = ['tools']
handler.command = ['wattpadd']

export default handler
