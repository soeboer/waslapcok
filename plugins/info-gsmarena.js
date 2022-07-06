import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'redmi note 10s', m)
    axios.get(`https://yx-api.herokuapp.com/api/search/gsmarena?query=` + text)
        .then((res) => {
	    
let hasil = `*Rincian Type HP ${text}* \n *Name* : ${res.data.judul}\n*Rilis* : ${res.data.rilis}\n*Ukuran* : ${res.data.ukuran}\n*Model* : ${res.data.type}\n*Storage* : ${res.data.storage}\n*Display* : ${res.data.display}\n*Inchi* : ${res.data.inchi}\n*Pixel* : ${res.data.pixel}\n*VideoPixel* : ${res.data.videoPixel}\n*Ram* : ${res.data.ram}\n*Chipset* : ${res.data.chipset}\n*Batrai* : ${res.data.batrai}\n*Merek Batrai* : ${res.data.merek_batre}\n*Detail* : ${res.data.detail}`

            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Spesifikasi HP Tidak Ditemukan!'))
}
				


handler.help = ['garena <type HP>']
handler.tags = ['info']
handler.command = /^garena/i
export default handler
