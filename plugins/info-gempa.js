import axios from 'axios'
let handler = async (m, { conn, text }) => {
let res = await axios("https://api.burhansyam.com/bot/gempa.json"")
let json = res.data
let url = json.url
conn.sendFile(m.chat, "*Info Gempa BMKG*", url, '', author, m)

}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
