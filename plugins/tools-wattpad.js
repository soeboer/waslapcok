import { WattPads } from '@dhnapi/wattpad.js'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
                if (!text) throw `Contoh : ${usedPrefix + command} love`
                                let wattpad = new WattPads(); 

async function wattpad(text) {  
                 wattpad.set('query', 'text');
               let response = await wattpad.search();
//                return response;
                  conn.reply(m.chat, `⭔ *Wadepak :* ${response}`, m)
};
}
handler.help = ['wattpadd'].map(v => v + ' [tentang]')
handler.tags = ['tools']
handler.command = ['wattpadd']

export default handler
