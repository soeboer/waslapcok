let handler = async (m, { conn, text }) => {
let [teks] = text.split ` `
if (!teks) return conn.reply(m.chat, 'yaa bisa dibantu ?', m)
let bales = `Halo..Terimakasih banyak ucapan & doanya,saya tunggu dirumah yaaa 😊 😍 🥰 😘`
            conn.reply(m.chat, bales, m)
}


handler.customPrefix = /^(icha|hbd|halo|selamat|hpbd|dek)$/i
handler.command = new RegExp

export default handler
