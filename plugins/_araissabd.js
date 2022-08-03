let handler = async (m, { conn, text }) => {
let bales = `Halo..Terimakasih banyak ya,saya tunggu dirumah yaaa😊 😍 🥰 😘`
            conn.reply(m.chat, bales, m)
}


handler.customPrefix = /^(icha|hbd|halo)$/i
handler.command = new RegExp

export default handler
