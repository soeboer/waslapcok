let handler = async (m, { conn, usedprefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    conn.sendFile(m.chat, global.API('https://docs-jojo.herokuapp.com', '/api/skull-makeup', {
        image_url: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'error.png', `*Hiiii*`, m)
}

handler.help = ['skull']
handler.tags = ['maker']

handler.command = /^(skull)$/i

export default handler
