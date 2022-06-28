import fetch from 'node-fetch'
import cheerio from 'cheerio'

let handler = async (m, { text }) => {
if (!text) throw 'Masukkan Nama Kota'
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/cuaca/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { name, weather[0].description, main.temp, main.temp } = json.results[0]
let madang = `✨ *Kota :* ${name}
🎆 *Deskrip :* ${weather[0].description}
👥 *Suhu :* ${main.temp}`
	m.reply(`Info Cuaca ${\n${madang}`)
}


handler.help = ['cuaca <kota>']
handler.tags = ['info']
handler.command = /^cuaca$/i
export default handler
