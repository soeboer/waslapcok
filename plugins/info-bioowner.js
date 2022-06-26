let handler = async (m, { conn, args, usedPrefix, command }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Waslap-Auto-Responder
*✉️ Nama RL* : burhansyam
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 010101
*🎨 Umur* : 212
*🧮 Kelas* : 
*🧩 Hobby* : Tidur
*💬 Sifat* : Pemalas
*🗺️ Tinggal* : root@localhost

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @burhansyam_
*🇫  Facebook* : Burhan Syam
*🏮 Chanel Youtube* : None
*🐈 Github:* burhansyam

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
