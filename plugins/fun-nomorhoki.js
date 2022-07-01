import { nomorhoki } from '@bochilteam/scraper'
//let jimp = require('jimp')
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    //let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!text) throw `Contoh Penggunaan ${usedPrefix}${command} 6281xxx`
    const result = await nomorhoki(text)
    
let nohoki = `
*NOMOR:* ${result.nomer}
*ANGKA BAGUA SHUZI:* ${result.angka_bagua_shuzi}
*POSITIF:* ${result.positif.positif}
*KEKAYAAN:* ${result.positif.kekayaan}
*KESEHATAN:* ${result.positif.kesehatan}
*CINTA:* ${result.positif.cinta}
*KESTABILAN:* ${result.positif.kestabilan}
*NEGATIF:* ${result.negatif.negatif}
*PERSELISIHAN:* ${result.negatif.perselisihan}
*KEHILANGAN:* ${result.negatif.kehilangan}
*MALAPETAKA:* ${result.negatif.malapetaka}
*KEHANCURAN:* ${result.negatif.Kehancuran}
`
await conn.sendButton(m.chat, nohoki, wm, [['menu', '.menu']], m)
}

handler.help = ['nomorhoki'].map(v => v + ' <no hp>')
handler.tags = ['fun']
handler.command = /^(nomorhoki)$/i

export default handler
