let handler = async (m, {command, conn}) => {
await m.reply('Masih saya pantau kak...')
let img = await conn.getFile(`https://api.burhansyam.com/bot/blekping.json`)
var capt = `🐦 Random Foto BlackPink😋`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 acak 🤗', `/${command}`]], m)
}

handler.help = ['blink']
handler.tags = ['fun']
handler.command = /^(blink)$/i
export default handler
