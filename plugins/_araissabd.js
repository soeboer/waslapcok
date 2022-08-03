let handler = async (m, { conn, text }) => {
let bales = `Halo..Terimakasih banyak ucapan & doanya,saya tunggu dirumah yaaa 😊 😍 🥰 😘`
            conn.reply(m.chat, bales, m)
}


handler.customPrefix = /^(icha|hbd|halo|selamat|hpbd|dek)$/i
handler.command = new RegExp

export default handler
