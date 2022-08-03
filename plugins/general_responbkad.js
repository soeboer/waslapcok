import jimp from 'jimp'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』*', `وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ\n*${wish()}*\nˢᵃʸᵃ ᵃᵈᵃˡᵃʰ ᵐᵉˢⁱⁿ ᵖᵉⁿʲᵃʷᵃᵇ ʸᵃⁿᵍ ᵈⁱᵇᵘᵃᵗ ᵘⁿᵗᵘᵏ ᵐᵉᵐᵇᵃⁿᵗᵘ ᵐᵉʳⁱⁿᵍᵃⁿᵏᵃⁿ ᵗᵘᵍᵃˢ ᵈᵃʳⁱ ᴮᴷᴬᴰ ᵈⁱ ˡᵃᵖᵃⁿᵍᵃⁿ.ᴶⁱᵏᵃ ᵃᵈᵃ ᵏʳⁱᵗⁱᵏ ᵈᵃⁿ ˢᵃʳᵃⁿ ˢⁱˡᵃᵏᵃⁿ ᵏⁱʳⁱᵐ ᵏᵉ @ᵇᵘʳʰᵃⁿˢʸᵃᵐ ᵈⁱ ᵀᴵᴮᴷᴬᴰ,\nꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ ᴛᴏᴍʙᴏʟ 𝐁𝐊𝐀𝐃, ᴜɴᴛᴜᴋ ᴍᴇɴᴀᴍᴘɪʟᴋᴀɴ ᴍᴇɴᴜ ʙᴏᴛ\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://bkad.gunungkidulkab.go.id/', 'ᴡᴇʙ', null, null, [
[`𝐁𝐊𝐀𝐃`, '.bkad']
], m, {asLocation: true})
}


handler.customPrefix = /^ass?alam|mas|mbak|pak|bu|permisi|tes|mohon|siang|sore|malam$/i
handler.command = new RegExp

export default handler

function wish() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let wishloc = "Selamat Dini Hari ☀️"
  if (time >= 4) {
    wishloc = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    wishloc = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    wishloc = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    wishloc = "Selamat Malam 🌙"
  }
  return wishloc
}
