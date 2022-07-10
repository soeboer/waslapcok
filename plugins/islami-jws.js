import fetch from 'node-fetch'

let handler = async (m, { text }) => {
	if (!text) throw 'Masukkan Nama Kota/Kabupaten' 
	let res = await jadwalsholat(text)
	res = res.map(({ lokasi, daerah, jadwal }) => {
		let saiki = jadwal.tanggal
		delete jadwal.tanggal, delete jadwal.date

		jadwal = Object.keys(jadwal).map((v) => `⏲ Waktu ${v.capitalize()}: *${jadwal[v]}*`).join('\n')
		return `🏠 *Lokasi:* ${lokasi}\n🕌 *Daerah:* ${daerah}\n📆 *Hari:* ${saiki}\n🕋 *Jam Waktu Sholat :*\n${jadwal}`
	}).join`\n\n`
	m.reply(res)
}
handler.help = ['jws <kota>']
handler.tags = ['islami']
handler.command = /^(jws)$/i
export default handler


async function jadwalsholat(query) {
	let id = await (await fetch(`https://api.myquran.com/v1/sholat/kota/cari/${query}`)).json()
	if (id.status !== true) throw id.message
	id = id.data
	let result = [], d = new Date().toLocaleDateString('id', { timeZone: 'Asia/Jakarta' }).split('/')
	for (let i = 0; i < id.length; i++) {
		let res = await fetch(`https://api.myquran.com/v1/sholat/jadwal/${id[i].id}/${d[2]}/${d[1]}/${d[0]}`)
		res = await res.json()
		result.push({ lokasi: res.data.lokasi, daerah: res.data.daerah, jadwal: res.data.jadwal })
	}
	return result
}
