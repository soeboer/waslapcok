let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {
await m.reply(global.wait)
        let res = await axios("https://api.burhansyam.com/bot/gempa.json")
        let str = `*INFO GEMPA*\n\nLokasi : ${res.lokasi}\nKedalaman : ${res.kedalaman}\nKoordinat : ${res.koordinat}\nMagnitude : ${res.magnitude}\nPotensi : ${res.potensi}\nWaktu : ${res.waktu}`
        let url = `${res.url}`
        conn.sendFile(m.chat, url, '', str, m)
}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
