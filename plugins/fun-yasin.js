let handler = async (m, { conn, args }) => {
// let text = args.slice(1).join(' ')

if (!args[0]) throw 'Masukkan Parameter'
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  m.reply('Proses...')
conn.sendFile(m.chat, global.API('https://hadi-api.herokuapp.com', '/api/canvas/yasin', {
url: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
name: text || '${response[0]}'
}), 'error.png', `*@${response[0]}*`, m)
}  


handler.help = ['yasin']
handler.tags = ['fun']
handler.command = /^(yasin)$/i
export default handler
