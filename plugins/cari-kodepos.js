import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'Ponjong', m)
    axios.get(`https://kodepos.vercel.app/search/?q=` + text)
        .then((res) => {
          let hasil = res.data.map((v) => `Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join`\n`  
          
          conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Kodepos Tidak Ditemukan!'))
}

handler.help = ['kodepos].map(v => v + ' <query>'']
handler.tags = ['pencarian']
handler.command = /^kodepos$/i
export default handler
