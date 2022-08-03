// let handler = async (m, { conn, text, usedPrefix, command }) => {
//           let hasil = `Waalaikumsalam warahmatullahi wabarakatuh\nوَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ\nSiap bisa dibantu?\nUntuk bantuan silakan ketik .bkad`
//             conn.reply(m.chat, hasil, m)

// }
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ\nˢᵉˡᵃᵐᵃᵗ ᴮᵉᵏᵉʳʲᵃ\nˢᵃʸᵃ ᵃᵈᵃˡᵃʰ ᵐᵉˢⁱⁿ ᵖᵉⁿʲᵃʷᵃᵇ ʸᵃⁿᵍ ᵈⁱᵇᵘᵃᵗ ᵒˡᵉʰ @ᵇᵘʳʰᵃⁿˢʸᵃᵐ ᵘⁿᵗᵘᵏ ᵐᵉᵐᵇᵃⁿᵗᵘ ᵐᵉʳⁱⁿᵍᵃⁿᵏᵃⁿ ᵗᵘᵍᵃˢ ᵈᵃʳⁱ ᴮᴷᴬᴰ ᵈⁱ ˡᵃᵖᵃⁿᵍᵃⁿ.ᴶⁱᵏᵃ ᵃᵈᵃ ᵏʳⁱᵗⁱᵏ ᵈᵃⁿ ˢᵃʳᵃⁿ ˢⁱˡᵃᵏᵃⁿ ᵏⁱʳⁱᵐ ᵏᵉ @ᵇᵘʳʰᵃⁿˢʸᵃᵐ ᵈⁱ ᵀᴵᴮᴷᴬᴰ,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ 𝐁𝐊𝐀𝐃, ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'burhansyam.com', 'ᴡᴇʙ', null, null, [
[`𝐁𝐊𝐀𝐃`, '.bkad']
], m, {asLocation: true})
}


handler.customPrefix = /^(ass(alam)?(alamualaikum)?|p|hai|tes)$/i
handler.command = new RegExp

export default handler
