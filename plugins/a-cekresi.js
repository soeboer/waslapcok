import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [kurir, teks] = text.split ` `

let listkurir = `
*Jasa Kirim / Kurir:*
sicepat
jne
jnt
pos
`.trim()

    if (!kurir) return conn.reply(m.chat, listkurir, m)
    if (!teks) return conn.reply(m.chat, 'Kode Resinya ?', m)
  await m.reply('Sabar Kak saya cek dulu...')
 let url = await fetch(`https://api.burhansyam.com/bot/resi/?kurir=${kurir}&resi=${teks}`)
      let angkut = await url.json()
      let hasil = `${angkut.result}`
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, hasil, m)
}

handler.help = ['cekresi <kurir noresi>']
handler.tags = ['info']
handler.command = /^(cekresi)$/i

export default handler
