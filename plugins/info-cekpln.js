import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + '521050558080', m)
    axios.get(`https://api.burhansyam.com/bot/pln/?id=` + text)
        .then((res) => {
          let hasil = `*• Tagihan PLN periode ${res.data.period} :*\n${res.data.print}`
            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Tagihan Tidak Ditemukan!'))
}

handler.help = ['cekpln <ID Pelanggan>']
handler.tags = ['info']
handler.command = /^(cekpln)$/i

export default handler
