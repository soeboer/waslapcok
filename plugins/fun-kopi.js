import fetch from 'node-fetch'

let handler = async (m, {command, conn}) => {
await m.reply('saya buatkan dulu maszeeh...')
  let res = await fetch(global.API("https://coffee.alexflipnote.dev", "/random.json")
  let json = await res.json();
 let { kipo } = json.file
 let img = await conn.getFile(`${kipo}`)
 var capt = `🐦 Selamat Menikmati 🐦`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 Ngopi lagi 🤗', `/${command}`]], m)
};
handler.help = ["kopi"];
handler.tags = ["fun"];

handler.command = /^(kopi|coffee)$/i;

export default handler
