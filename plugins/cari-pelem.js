import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { conn, text }) => {
    if (!text) throw `*[❗INFO❗] Masukan Judul Film Yang Ingin Kamu Cari*`
    
let data = await film(text)
let txt = res.result.map((v) => `${v.judul} ${v.type} ${v.quality} ${v.upload} ${v.link}`
let datathumb = data[0].thumb    
	m.reply(`${txt}`)
}
                                
handler.help = ['film <keyword>']
handler.tags = ['pencarian']
handler.command = /^(film)$/i

export default handler

async function film(text) {
	let html = (await axios.get(`http://167.99.31.48/?s=${text}`)
	let $ = cheerio.load(html)
                    $(b).find('article').each(function (c, d) {
                        let judul = $(d).find('div > a > div.addinfox > header > h2').text()
                        let quality = $(d).find('div > a > div > div > span').text()
                        let type = $(d).find('div > a > div.addinfox > div > i.type').text()
                        let upload = $(d).find('div > a > div.addinfox > div > span').text()
                        let link = $(d).find('div > a').attr('href');
                        let thumb = $(d).find('div > a > div > img').attr('src');
                        result.push = ({
                            status: 200,
                        	author: author,
                            judul: judul,
                            quality: quality,
                            type: type,
                            upload: upload,
                            link: link,
                            thumb: thumb,
                       	})
	return { result }
}
}
