import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
// let response = args.join(' ').split(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://docs-jojo.herokuapp.com/api/gaming?text=${args[0]}`
  conn.sendFile(m.chat, res, 'gaming.jpg', `@burhansyam Logo Maker`, m, false)
}
handler.help = ['squad'].map(v => v + ' <Nama Squad Game>')
handler.tags = ['maker']
handler.command = /^(squad)$/i

export default handler
