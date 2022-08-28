import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://indotv.my.id/bot/senja.json")
let json = res.data
let senja = json.senja
let author = json.author
conn.sendButton(m.chat, "_*Kata Anak Senja :*_", senja, author, [['😢 Acak Quote Senja 🥲', `${usedPrefix + command}`]], m)}
handler.help = ['senja']
handler.tags = ['fun']
handler.command = /^(senja)$/i
export default handler
