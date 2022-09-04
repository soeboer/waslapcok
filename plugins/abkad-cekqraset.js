import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Kode QR Aset* \n Contoh : .cekqr 201700667583`
  await m.reply('🕵️ Sabar, Kami cek di SIM ASET dulu...')
//  let res = await fetch(`https://aset.simda.net/2022/ai_cha/?qrcode=${text}`)
 let res = await fetch(`https://api.beetv.my.id/bot/aset/?qrcode=${text}`)

  if (!res.ok) throw await res.text()
let json = await res.json()
let { qrcode, kodekib, namabarang, tahunperolehan, nilaibarang, kodebarang, kodeopd, opd, status, kodelokasi, koderuang, ruang, kodeopdruang, penanggungjawab, lokasi } = json.result

let asetku = `*Detail Barang dalam SIM ASET :*
📲 *Kode QR    :* ${qrcode}
📃 *Kode KIB   :* ${kodekib}
📦 *Nama Barang :* ${namabarang}
💰 *Nilai Barang :* Rp ${nilaibarang}
📆 *Tahun Perolehan :* ${tahunperolehan}
🏠 *Nama OPD :* ${opd}
💻 *Status Barang :* ${status}
💾 *Kode Barang :* ${kodebarang}
🚏 *Ruang :* ${ruang}
📄 *Kode Ruang :* ${kodeopdruang}
🗺 *Kode Lokasi :* ${kodelokasi}
🧑‍✈️ *Penanggung Jawab:* ${penanggungjawab}
🌎 *Lokasi Barang:* \n${lokasi}`      
           conn.reply(m.chat, asetku, m)
}
// 🚨 *Kode OPD Ruang :* ${kodeopdruang}

handler.help = ['cekqr <kodeqr aset>']
handler.tags = ['bkad']
handler.command = /^(cekqr)$/i

export default handler
