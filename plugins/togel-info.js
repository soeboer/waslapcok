import fs from 'fs'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { text }) => {
	if (!text) throw 'Masukkan Nama Togel'
	let res = await Togel(text)
	let txt = res.result.map((v) => `[${v.No.replace('', ' OK')}] ${v.angka}`).join`\n`
	m.reply(`Keluaran Togel ${res.toto}\n\n${txt}`)
}
handler.help = ['togel <nama>']
handler.tags = ['info']
handler.command = /^togel$/i

export default handler

async function Togel(name) {
	let list = JSON.parse(fs.readFileSync('./lib/togel.json', 'utf-8'))
	let data = list.find((v) => (new RegExp(name, 'gi')).test(v.toto)), result = []
	if (!data) throw 'Togel Yg Tersedia:\n' + list.map(v => v.toto).sort().join('\n')
	let html = (await axios.get(`https://indotv.my.id/${data.value}`)).data
	let $ = cheerio.load(html)
	$('div > table').find('tbody > tr').slice(1).each(function () {
		let No = $(this).find('td').eq(0).text()
		let Tanggal = $(this).find('td').eq(1).text()
		let Hari = $(this).find('td').eq(2).text()
		let Angka = $(this).find('td').eq(3).text()		
// 		if (!/DATA KELUARAN/gi.test(Angka) && !/2022/gi.test(Angka)) result.push({ No, Tanggal, Hari, Angka })
		result.push({ No, Tanggal, Hari, Angka })
	})
	return { toto: data.toto.toUpperCase(), result }
}
