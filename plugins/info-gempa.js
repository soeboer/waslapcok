import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.burhansyam.com/bot/gempa.json")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*Siiiuuuuuu*", author, url, [['⚽ tanggal ⚽', `${usedPrefix + command}`]], m)}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
