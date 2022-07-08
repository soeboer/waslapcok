import fetch from 'node-fetch'

let handler = async (m, { command, conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Tafsir tentang apa?*`
let res = await fetch(global.API('https://api.burhansyam.com', '/bot/tafsir/', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let tafsir = json.result.map((v, i) => `${i + 1}.📓 Surat : ${v.tafsir}\n📖 Deskripsi : ${v.deskripsi}`).join('\n\n')
m.reply(tafsir)
  }
handler.help = ['tafsir <tentang>']
handler.tags = ['islami']
handler.command = /^(tafsir)$/i
export default handler
