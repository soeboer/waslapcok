import axios from 'axios'

let handler = async(m, { conn, text }) => {
        let res = await axios("https://api.burhansyam.com/bot/gempa.json")
        let json = res.data
        let url = json.url
        let jam = json.jam
        let tanggal = json.tanggal
        let lokasi = json.lokasi
        let kedalaman = json.kedalaman
        let koordinat = json.koordinat
        let magnitude = json.magnitude
        let dirasakan = json.dirasakan
        let potensi = json.potensi
        conn.sendFile(m.chat, "*tanggal*", author, url, [['jam', 'dirasakan']], m)
}

handler.help = ['gempa']
handler.tags = ['info']
handler.command = /^(gempa)$/i
export default handler
