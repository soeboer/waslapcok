import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.burhansyam.com/bot/injek/menu.json")
let json = res.data
let injek = json.menu
conn.reply(m.chat, `${injek}` .trim(), m)

}
// Tambah sendiri kalo mau
handler.help = ['bkad']
handler.tags = ['general']
handler.command = /^(bkad)$/i

export default handler
