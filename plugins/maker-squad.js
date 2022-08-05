import fetch from 'node-fetch'
let handler = async (m, { conn, text }) => {
// let response = args.join(' ').split(' ')
if (!text) throw `*[❗INFO❗] Masukan Nama Squad contoh\n.squad Agen Dosa Inc`
  m.reply('Sabar kak, saya proses dulu yaak..')
  let res = `https://docs-jojo.herokuapp.com/api/gaming?text=${text}`
  conn.sendFile(m.chat, res, 'gaming.jpg', `@burhansyam Logo Maker`, m, false)
}
handler.help = ['squad <Nama Squad Game>']
handler.tags = ['maker']
handler.command = /^(squad)$/i

export default handler
