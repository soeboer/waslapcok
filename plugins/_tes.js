// import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
          let hasil = `Waalaikumsalam warahmatullahi wabarakatuh\nSiap bisa dibantu?Untuk bantuan silakan ketik .bkad`
            conn.reply(m.chat, hasil, m)
    
}

handler.customPrefix = /^(tes(t)?|p)$/i
handler.command = new RegExp

export default handler
