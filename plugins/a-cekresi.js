import axios from 'axios'

let handler = async(m, { conn, text }) => {
let [kurir, teks] = text.split ` `

let listkurir = `*Jasa Kurir :*
sicepat
`.trim()

    if (!kurir) return conn.reply(m.chat, listkurir, m)
    if (!teks) return conn.reply(m.chat, 'nomor resinya?', m)

  await m.reply('Sabar Kak saya cek dulu...')
axios.get('https://api.burhansyam.com/bot/resi/?kurir=' + kurir + '&resi=' + teks)
        .then((res) => {
          let hasil = `${res.data.result}`
            conn.reply(m.chat, hasil, m)
}

handler.help = ['cekresi <kurir noresi>']
handler.tags = ['info']
handler.command = /^(cekresi)$/i

export default handler
