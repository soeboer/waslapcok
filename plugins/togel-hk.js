import fs from 'fs'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { text }) => {
	if (!text) throw 'Masukkan Nama Togel'
	let res = await Togel(text)
	let txt = res.result.map((v) => `[${v.jam.replace('WIB', ' WIB')}] ${v.acara}`).join`\n`
	m.reply(`Jadwal TV ${res.channel}\n\n${txt}`)
}
handler.help = ['togel <channel>']
handler.tags = ['info']
handler.command = /^togel$/i

export default handler

async function Togel(name) {
	let list = JSON.parse(fs.readFileSync('./lib/togel.json', 'utf-8'))
	let data = list.find((v) => (new RegExp(name, 'gi')).test(v.channel)), result = []
	if (!data) throw 'List Channel Yg Tersedia:\n\n' + list.map(v => v.channel).sort().join('\n')
	let html = (await axios.get(`https://indotv.my.id/toto/${data.isPay ? '/' : ''}${data.value}`)).data
	let $ = cheerio.load(html)
	$('div > table.table').find('tbody > tr').slice(1).each(function () {
		let No = $(this).find('td').eq(0).text()
		let Tanggal = $(this).find('td').eq(1).text()
		let Hari = $(this).find('td').eq(2).text()
		let Angka = $(this).find('td').eq(3).text()		
		if (!/DATA KELUARAN/gi.test(acara) && !/2022/gi.test(acara)) result.push({ No, Tanggal, Hari, Angka })
	})
	return { channel: data.channel.toUpperCase(), result }
}
