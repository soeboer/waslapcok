let handler = async (m, { conn }) => {
await m.reply('dalam proses...')
let img = await conn.getFile(`https://hadi-api.herokuapp.com/api/randomImage/cecan`)
var capt = `🐦 Random Foto Cecan🗿`
conn.sendButton(m.chat, capt, wm, img.jpg, [['🤗 Acak 😋', `.cecan`]], m)
}

handler.help = ['wallpaper Cecan']
handler.tags = ['downloader']

handler.command = /^(igo|cecan)$/i

export default handler
