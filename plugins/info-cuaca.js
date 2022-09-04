import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, text }) => {
if (!text) throw `*Masukan Nama Kota*`
let res = await fetch(global.API('https://api.beetv.my.id', '/bot/cuaca/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { kota, suhu, cuaca, kelembaban, angin, gbr } = json.results[0]

let madang = `
🏭 *Kota :* ${kota}
🌈 *Cuaca :* ${cuaca}
🪄 *Suhu :* ${suhu} °C
💦 *Kelembaban :* ${kelembaban} %
🌀 *Angin :* ${angin} km/h
📝 *Coded by burhansyam*
`

conn.sendFile(m.chat, gbr, '', madang, m)
}

handler.help = ['cuaca <kota>']
handler.tags = ['info']
handler.command = /^cuaca$/i

export default handler
