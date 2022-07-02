import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split ` `
let listeffect = `yasin`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'tulis Namanya?', m)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let avatar = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
  await m.reply('Sabar Kak saya buatkan dulu...')
 let hasil = await conn.getFile(`https://hadi-api.herokuapp.com/api/canvas/yasin/?name=${teks}?url=${avatar}`)
 let caption = `*Buku Yasin*\n\nUntuk : ${who}`
    conn.sendFile(m.chat, hasil.data, 'yasin.jpg', caption, m)
}
 
handler.help = ['yasin']
handler.tags = ['fun']
handler.command = /^(yasin)$/i
export default handler
