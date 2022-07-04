import fs from 'fs'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { conn, text }) => { 
  let txt = await togel(text)
	m.reply(`Data Keluaran HK \n\n${txt}`)
}
handler.help = ['togelhk']
handler.tags = ['info']
handler.command = /^togelhk$/i

export default handler

async function togel() {
	let html = (await axios.get(`https://indotv.my.id/toto/hk.php`)).data
	let $ = cheerio.load(html)
	$('div > table.table').find('tbody > tr').slice(1).each(function () {
		let No = $(this).find('td').eq(0).text()
		let Tanggal = $(this).find('td').eq(1).text()
    let Hari = $(this).find('td').eq(2).text()
    let Result = $(this).find('td').eq(3).text()
    result.push({ No, Tanggal, Hari, Result })
	})
	return { result }
}
