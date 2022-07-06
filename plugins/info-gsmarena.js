import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'redmi note 10s', m)
    axios.get(`https://yx-api.herokuapp.com/api/search/gsmarena?query=` + text)
        .then((res) => {
	    
// let hasil = `* GSM ARENA *\n*Name* : ${res.judul}\n*Rilis* : ${res.rilis}\n*Ukuran* : ${res.ukuran}\n*Model* : ${res.type}\n*Storage* : ${res.storage}\n*Display* : ${res.display}\n*Inchi* : ${res.inchi}\n*Pixel* : ${res.pixel}\n*VideoPixel* : ${res.videoPixel}\n*Ram* : ${res.ram}\n*Chipset* : ${res.chipset}\n*Batrai* : ${res.batrai}\n*Merek Batrai* : ${res.merek_batre}\n*Detail* : ${res.detail}`
let hasil = `Type HP ${text}\n*${res.data.judul} `
            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Spesifikasi HP Tidak Ditemukan!'))
}
				


handler.help = ['garena <type HP>']
handler.tags = ['info']
handler.command = /^garena/i
export default handler
