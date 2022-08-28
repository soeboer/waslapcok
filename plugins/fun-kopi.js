let handler = async (m, {command, conn}) => {
await m.reply('ditunggu dulu maszeeh...')
let img = await conn.getFile(`https://indotv.my.id/bot/kopi.json`)
var capt = `🐦 Selamat Menikmati🗿`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 Ngopi Lagi 🤗', `/${command}`]], m)
}

handler.help = ["kopi"];
handler.tags = ["fun"];
handler.command = /^(kopi|coffee)$/i;

export default handler
