import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Tafsir tentang apa?*`
let json = await fetch(global.API('https://docs-jojo.herokuapp.com', '/api/tafsir', { q: text }))
let tafsir = json.result.map((v, i) => `${i + 1}.📓 Surat : ${v.tafsir}\n📖 Deskripsi : ${v.deskripsi}`).join('\n\n')
m.reply(tafsir)
  }
handler.help = ['tafsir <tentang>']
handler.tags = ['islami']
handler.command = /^(tafsir)$/i
export default handler
