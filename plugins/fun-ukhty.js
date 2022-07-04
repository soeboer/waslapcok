let handler = async (m, {command, conn}) => {
await m.reply('Masih saya pantau kak...')
let img = await conn.getFile(`https://api.burhansyam.com/bot/ukhty.json`)
var capt = `🐦 Random Foto Ukhty🗿`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 acak 🤗', `/${command}`]], m)
}

handler.help = ['ukhty']
handler.tags = ['fun']
handler.command = /^(ukhty)$/i
export default handler
