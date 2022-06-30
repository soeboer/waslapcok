import hmtai from "hmtai"
let handler = async (m, { conn }) => {
await m.reply('dalam proses...')
let img = hmtai.mobileWallpaper();
var capt = `🐦 Wallpaper Anime 🗿`
conn.sendButton(m.chat, capt, wm, img, [['🤗 Acak 😋', `.wallnime`]], m)
}

handler.help = ['wallnime']
handler.tags = ['downloader']

handler.command = /^(wallnime|wallhp)$/i

export default handler
