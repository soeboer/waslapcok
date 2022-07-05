import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [kurir, teks] = text.split ` `

let listkurir = `*Jasa Kurir :*
sicepat
`.trim()

    if (!kurir) return conn.reply(m.chat, listkurir, m)
    if (!teks) return conn.reply(m.chat, 'nomor resinya?', m)

  await m.reply('Sabar Kak saya cek dulu...')
 let fucek = await fetch('https://api.burhansyam.com/bot/resi/?kurir=' + kurir + '&resi=' + teks + `&apikey=bajingan99`)
//   m.reply(`${fucek}`)
    conn.reply(m.chat,`${fucek}`.trim(), m)
}

handler.help = ['cekresi <kurir noresi>']
handler.tags = ['info']
handler.command = /^(cekresi)$/i

export default handler
