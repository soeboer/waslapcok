import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
let response = args.join(' ').split(' ')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('proses..')
  let res = `https://ziy.herokuapp.com/api/maker/sadboy?text1=${response[0]}&text2=${response[1]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'gfx3.jpg', `Nih kak`, m, false)
}
handler.help = ['sad'].map(v => v + ' <text1 text2>')
handler.tags = ['maker']
handler.command = /^(sad)$/i

export default handler
