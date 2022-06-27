let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch(global.API('zenzapis', '/searching/bacaresep', { query : text }, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.title) throw json
  await conn.sendFile(m.chat, json.thumb, '', `
${json.title}
${json.url}
*Judul:* ${json.judul}
*Tingkat:* ${json.tingkat_kesulitan}
*Durasi:* ${json.waktu_masak}
*Porsi:* ${json.hasil}


*Bahan:* ${json.bahan}
*Cara:* ${json.langkah_langkah}
`.trim(), m)
}
handler.help = ['resep <makanan>', 'masak <makanan>']
handler.tags = ['internet']
handler.command = /^(resep|masak)$/i

export default handler
