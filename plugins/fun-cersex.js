import fetch from 'node-fetch'


let handler = async (m, { text }) => {
  let url = await fetch('https://docs-jojo.herokuapp.com/api/cerpen')
  let json = await url.json()
let { title, pengarang, kategori, cerpen } = json.result[0]
let hasil = `✨ *Judul  :* ${title}
🎆 *Pengarang :* ${pengarang}
💬 *Kategori  :* ${kategori}
${cerpen}`

  m.reply(hasil)
}
handler.help = ['cersex']
handler.tags = ['fun']
handler.command = /^cersex$/i

export default handler
