import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[βINFOβ] Penyakit,obat atau istilah medis yang ditanyakan* \n Contoh : .medis sariawan`
  await m.reply('π΅οΈ Sabar, Kami tanyakan dokter dulu...')
 let res = await fetch(`https://api.burhansyam.com/bot/alodoc/?tanya=${text}`)

  if (!res.ok) throw await res.text()
let json = await res.json()
let { title, type, image, slug, short_content, doctor_name, custom_last_update, category } = json.data[0]

let asolole = `*Penjelasang singkat :*
π² *Judul    :* ${title}
π *Jenis   :* ${type}
π¨ *Kategori   :* ${category}
π©βπ¬ *Nama Dokter :* ${doctor_name}
π *Update :* ${custom_last_update}
${short_content}`      
           conn.reply(m.chat, asolole, m)
}
// π¨ *Kode OPD Ruang :* ${kodeopdruang}

handler.help = ['medis <sariawan>']
handler.tags = ['pencarian']
handler.command = /^(medis)$/i

export default handler
