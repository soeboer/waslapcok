import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Kode QR Aset* \n Contoh : .cekqr 201700667583`
  await m.reply('Kata Mas Angga mau di cek dulu...')
 let res = await fetch(`https://aset.simda.net/2022/ai_cha/?qrcode=${text}`)
if (!res.ok) throw await res.text()
let json = await res.json()
let { qrcode, kodekib, namabarang, tahunperolehan, nilaibarang, kodebarang, kodeopd, opd, status, kodelokasi, koderuang, ruang, kodeopdruang, penanggungjawab, lokasi } = json.result

let asetku = `
🏷 *Kode QR    :* ${qrcode}
📃 *Kode KIB   :* ${kodekib}
📄 *Kode KIB   :* ${namabarang}
💰 *Nilai Barang:* ${nilaibarang}
📆 *Tahun Perolehan :* ${tahunperolehan}
🏠 *Nama OPD :* ${opd}
💻 *Status Barang :* ${status}
🪙 *Kode Barang :* ${kodebarang}
🚧 *Ruang :* ${ruang}
🚏 *Kode Ruang :* ${kodeopdruang}
🚨 *Kode OPD Ruang :* ${kodeopdruang}
🖨 *Kode Lokasi :* ${kodelokasi}
🧑🏿‍✈️ *Penanggung Jawab:* ${penanggungjawab}
🗺 *Lokasi Barang:* \n${lokasi}`      
           conn.reply(m.chat, asetku, m)
}

handler.help = ['cekqr <kodeqr aset>']
handler.tags = ['info']
handler.command = /^(cekqr)$/i

export default handler
