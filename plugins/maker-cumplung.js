let handler = async (m, { conn, args }) => {
let text = args.slice(1).join(' ')
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('http://docs-jojo.herokuapp.com', '/api/skull-makeup', {
image_url: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')}), 'error.png', 'Penampakan Penunggu Empang', m)
}  
handler.help = ['skull']
handler.tags = ['maker']
handler.command = /^(skull)$/i
export default handler
