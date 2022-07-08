  
let handler = async (m, {command, conn}) => {
await m.reply('Masih saya pantau kak...')
let img = await conn.getFile(`https://api.burhansyam.com/bot/betes.json`)
var capt = `🐦 Random Foto BTS😋`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 acak 🤗', `/${command}`]], m)
}

handler.help = ['army']
handler.tags = ['fun']
handler.command = /^(army)$/i
export default handler
