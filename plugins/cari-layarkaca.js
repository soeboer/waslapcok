import fetch from 'node-fetch'
import { xfar } from 'xfarr-api'
import axios from 'axios'

let handler = async (m, { usedPrefix, command, conn:fur, args }) => {

if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`

async function Film() {
let data = await xfar.Film(args[0]).then
let txt = `*--------ã FILM-SEARCH ã--------*\n\n`
for (let i of data) {
txt += `*ð« Judul :* ${i.judul}\n`
txt += `*ðï¸  Tipe  :* ${i.type}\n`
txt += `*ð Kualitas :* ${i.quality}\n`
txt += `*ð®Upload :* ${i.upload}\n`
txt += `*ð Url :* ${i.url}\n-----------------------------------------------------\n`
}

conn.sendButtonLoc(m.chat, await (await fetch(data[0].thumb)).buffer(), txt, wm, 'pencet', 'ok', m)
})
}

handler.help = ['lk21 <judul>']
handler.tags = ['pencarian']
handler.command = /^(lk21)$/i
export default handler
