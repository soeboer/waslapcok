import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'redmi note 10s', m)
    axios.get(`https://yx-api.herokuapp.com/api/search/gsmarena?query=` + text)
        .then((anu) => {

let hasil = `* GSM ARENA *\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Ukuran* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inchi* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Batrai* : ${anu.batrai}
*Merek Batrai* : ${anu.merek_batre}
*Detail* : ${anu.detail}`			

            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Spesifikasi HP Tidak Ditemukan!'))
}
				


handler.help = ['garena <type HP>']
handler.tags = ['info']
handler.command = /^garena/i
export default handler
