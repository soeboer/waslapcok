import fetch from 'node-fetch'

let handler = async (m, { command, conn, text }) => {
if (!text) throw `*[βINFOβ] Masukan Tafsir tentang apa?*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/tafsir/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let tafsir = json.result.map((v, i) => `${i + 1}.π Surat : ${v.tafsir}\nπ Deskripsi : ${v.deskripsi}`).join('\n\n')
m.reply(tafsir)
  }
handler.help = ['tafsir <tentang>']
handler.tags = ['islami']
handler.command = /^(tafsir)$/i
export default handler
