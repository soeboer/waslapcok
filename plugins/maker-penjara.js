let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/jail', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
dog: text || 'Tahanan+Mertua'
}), 'error.png', 'Tahanan Mertua', m)
}

handler.help = ['penjara']
handler.tags = ['maker']

handler.command = /^(penjara)$/i

export default handler
