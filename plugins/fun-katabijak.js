import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://violetics.pw/api/random/katabijak?apikey=beta")
let json = res.data
let result = json.result
let status = json.status
conn.sendButton(m.chat, "_*Kata Orang Bijak :*_", result, status, [['🐼 Acak Kata Bijak 📑', `${usedPrefix + command}`]], m)}

handler.help = ['katabijak']
handler.tags = ['fun']
handler.command = /^(katabijak)$/i
export default handler
