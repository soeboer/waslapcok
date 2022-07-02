import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Namanya...'
  m.reply('Proses Membuat Sampul Buku Yasin...')
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let url = await conn.profilePictureUrl(who, 'image')
//     let url = await conn.getProfilePicture(conn.user.jid)
    let res = `https://hadi-api.herokuapp.com/api/canvas/yasin?name=${response[0]}&url=${url}`
  conn.sendFile(m.chat, res, 'yasin.jpg', `Turut Mengenang`, m, false)
}
 
handler.help = ['yasin']
handler.tags = ['fun']
handler.command = /^(yasin)$/i
export default handler
