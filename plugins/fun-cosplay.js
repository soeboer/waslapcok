let handler = async (m, {command, conn}) => {
await m.reply('ditunggu dulu maszeeh...')
let img = await conn.getFile(`https://api.zacros.my.id/randomimg/cosplay`)
var capt = `🐦 Random Foto Cosplay🗿`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 acak 🤗', `/${command}`]], m)
}

handler.help = ['cosplay']
handler.tags = ['fun']

handler.command = /^(cosplay)$/i

export default handler
