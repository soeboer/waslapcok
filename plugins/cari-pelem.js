import { xa } from 'xfarr-api'
import fetch from 'node-fetch'
import axios from 'axios'


let handler = async (m, { usedPrefix, command, conn:fur, args }) => {
  
if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`

const data = await xa.search.film(args[0]).then(async data => {
let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
for (let i of data) {
txt += `*📫 Judul :* ${i.judul}\n`
txt += `*🎞️  Tipe  :* ${i.type}\n`
txt += `*📟 Kualitas :* ${i.quality}\n`
txt += `*📮Upload :* ${i.upload}\n`
txt += `*🔗 Url :* ${await shortlink(i.link)}\n-----------------------------------------------------\n`
}

conn.sendButton(m.chat, await (await fetch(data[0].thumb)).buffer(), txt, wm, 'pencet', 'ok', m)
})
}
handler.help = ['film <keyword>']
handler.tags = ['pencarian', 'film']
handler.command = /^(film)$/i

export default handler

async function shortlink(url){
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''}
