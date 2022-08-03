let handler = async (m, { conn, text }) => {

let bales = `Halo..Terimakasih banyak ucapan & doanya,saya tunggu dirumah yaaa 😊 😍 🥰 😘`
            conn.reply(m.chat, bales, m)
}



handler.customPrefix = /^hai|hoi|icha|hbd|halo|hpbd|selamat|ultah|ulang$/i
handler.command = new RegExp

export default handler
