import axios from 'axios'

let handler = async (m, {command, conn}) => {
let res = await axios("https://api.burhansyam.com/bot/ukhty.json")
let json = res.data
let ukhty = json.ukhty
let author = json.author
// conn.sendButton(m.chat, "_*Quotes Bucin :*_", ukhty, author, [['😍🥰 Lanjut 😘🤩', `${usedPrefix + command}`]], m)}
       conn.sendButton(m.chat, `_${command}_`.trim(), author, ukhty, [['😋 acak 🤗', `/${command}`]], m)
  
handler.help = ['ukhty']
handler.tags = ['fun']
handler.command = /^(ukhty)$/i
export default handler
