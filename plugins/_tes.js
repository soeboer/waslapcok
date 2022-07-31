// import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
          let hasil = `Waalaikumsalam warahmatullahi wabarakatuh\nوَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ\nSiap bisa dibantu?\nUntuk bantuan silakan ketik .bkad`
            conn.reply(m.chat, hasil, m)
    
}

handler.customPrefix = /^(ass(alam)?|p)$/i
handler.command = new RegExp

export default handler
