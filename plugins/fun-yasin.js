import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Namanya...'
  m.reply('Proses Membuat Sampul Buku Yasin...')
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let avatar = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  let res = `https://hadi-api.herokuapp.com/api/canvas/yasin?name=${response[0]}&url=${avatar}`
  conn.sendFile(m.chat, res, 'yasin.jpg', `Turut Mengenang`, m, false)
}
 
handler.help = ['yasin']
handler.tags = ['fun']
handler.command = /^(yasin)$/i
export default handler
