import fetch from "node-fetch"

let handler = async (m, {command, conn}) => {
await m.reply('saya buatkan dulu maszeeh...')
  let res = await fetch(global.API("https://coffee.alexflipnote.dev", "/random.json")
  let json = await res.json();
 let { kipo } = json.file 
        conn.sendButton(m.chat, `_${command}_`.trim(), `${kipo}`, kipo, [['😋 Ngopi Lagi 🤗', `/${command}`]], m)
 
};
handler.help = ["kopi"];
handler.tags = ["fun"];

handler.command = /^(kopi|coffee)$/i;

export default handler
