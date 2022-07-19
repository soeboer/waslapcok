import fetch from 'node-fetch'
import { xfar } from 'xfarr-api'
import axios from 'axios'

let handler = async (m, { usedPrefix, command, conn:fur, args }) => {

if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`

async function data(args[0]) {
let data = await xfar.Film(args[0]).then
let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
for (let i of data) {
txt += `*📫 Judul :* ${i.judul}\n`
txt += `*🎞️  Tipe  :* ${i.type}\n`
txt += `*📟 Kualitas :* ${i.quality}\n`
txt += `*📮Upload :* ${i.upload}\n`
txt += `*🔗 Url :* ${i.url}\n-----------------------------------------------------\n`
}

conn.sendButtonLoc(m.chat, await (await fetch(data[0].thumb)).buffer(), txt, wm, 'pencet', 'ok', m)
})
}

handler.help = ['lk21 <judul>']
handler.tags = ['pencarian']
handler.command = /^(lk21)$/i
export default handler
