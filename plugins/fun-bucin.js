import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.beetv.my.id/bot/bucin.json")
let json = res.data
let bucin = json.bucin
let author = json.author
conn.sendButton(m.chat, "_*Quotes Bucin :*_", bucin, author, [['😍🥰 Lanjut Bucin 😘🤩', `${usedPrefix + command}`]], m)}
handler.help = ['bucin']
handler.tags = ['fun']
handler.command = /^(bucin)$/i
export default handler
