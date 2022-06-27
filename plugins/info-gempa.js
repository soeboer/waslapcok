import axios from 'axios'

let handler = async(m, { conn, text }) => {
        let res = await axios("https://api.burhansyam.com/bot/gempa.json")
        let str = `*INFO GEMPA*\nTanggal : ${res.tanggal}\nWaktu : ${res.waktu}\nLokasi : ${res.lokasi}\nKedalaman : ${res.kedalaman}\nKoordinat : ${res.koordinat}\nMagnitude : ${res.magnitude}\nPotensi : ${res.potensi}\nDirasakan : ${res.dirasakan}`
        let url = `${res.url}`
        conn.sendFile(m.chat, url, '', str, m)
}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
