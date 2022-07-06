import { WattPads } from '@dhnapi/wattpad.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Contoh : ${usedPrefix + command} love`
                                let wattpad = new WattPads(); 

async function wattpad.search(text) {  
                 wattpad.set('query', 'text');
               let anu = await wattpad.search();
                if (anu.status == false) return m.reply(anu.response)
//                 conn.reply(m.chat, `⭔ *Judul :* ${anu.response}\n⭔ *Info :* ${anu.response}\n⭔ *Deskripsi :* ${anu.response}`, m)
                  conn.reply(m.chat, `⭔ *Judul :* ${anu.response}`, m)
}
handler.help = ['wattpadd'].map(v => v + ' [tentang]')
handler.tags = ['tools']
handler.command = ['wattpadd']

export default handler
