import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.burhansyam.com/bot/gempa.json")
let json = res.data
let url = json.url
let author = json.author
let tanggal = json.tanggal

conn.sendButton(m.chat, "💬 Peringatan Dini ", tanggal, url, [['🌐 *Info Gempa BMKG* 🌐', `${usedPrefix + command}`]], m)

}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
