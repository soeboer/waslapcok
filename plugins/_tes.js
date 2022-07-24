import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
          let hasil = `Waah situ hebat yak dah berani ngetes ngetes??? `
            conn.reply(m.chat, hasil, m)
    
}

handler.customPrefix = /^(tes(t)?|p)$/i
handler.command = new RegExp

export default handler
