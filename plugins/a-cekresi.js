import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [kurir, teks] = text.split ` `

let listkurir = `*Jasa Kurir :*
sicepat
`.trim()

    if (!kurir) return conn.reply(m.chat, listkurir, m)
    if (!teks) return conn.reply(m.chat, 'nomor resinya?', m)

  await m.reply('Sabar Kak saya cek dulu...')
 let hasil = await fetch('https://api.burhansyam.com/bot/resi/?kurir=' + kurir + '&resi=' + teks + `&apikey=bajingan99`)
//  let hasil = await conn.getFile(`https://violetics.pw/api/photooxy/${effect}?text=${teks}&apikey=beta`)
//  let caption = `*PHOTOOXY*\n\nEffect : ${effect}`
  m.reply(hasil)
//     conn.sendFile(m.chat, hasil.data, 'photooxy.jpg', caption, m)
}

handler.help = ['cekresi <kurir noresi>']
handler.tags = ['info']
handler.command = /^(cekresi)$/i

export default handler
