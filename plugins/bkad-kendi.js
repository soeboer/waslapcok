import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nomor Polisi* \n Contoh : .kendi AB 1060 UD`
  await m.reply('🕵️ Sabar, Kami cek di SIM ASET dulu...')
//  let res = await fetch(`https://aset.simda.net/2022/ai_cha/?qrcode=${text}`)
 let res = await fetch(`https://api.burhansyam.com/bot/nopol/?nopol=${text}`)

  if (!res.ok) throw await res.text()
let json = await res.json()
let { qrcode, kodekib, namabarang, pkb, merk, model, tahunperolehan, nilaibarang, kodebarang, kodeopd, opd, status, kodelokasi, koderuang, ruang, kodeopdruang, penanggungjawab, lokasi, tglstnk,  } = json.result

let asetku = `*Detail Barang dalam SIM ASET :*
📄 *Nomor Polisi :* ${text}
📦 *Jenis :* ${namabarang}
🚨 *Merk :* ${merk}
📄 *Model :* ${model}
💰 *Nilai Barang :* Rp ${nilaibarang}
📆 *Tahun Perolehan :* ${tahunperolehan}
🏠 *Nama OPD :* ${opd}
💻 *Status Barang :* ${status}
📲 *Kode QR    :* ${qrcode}
📃 *Akhir Pajak   :* ${tglstnk}
💵 *Pajak Kendaraan :* ${pkb}
💾 *Kode Barang :* ${kodebarang}
🚏 *Ruang :* ${ruang}
🧑‍✈️ *Penanggung Jawab :* ${penanggungjawab}
🌎 *Lokasi Barang :* \n${lokasi}`      
           conn.reply(m.chat, asetku, m)
}
// 🚨 *Kode OPD Ruang :* ${kodeopdruang}
// 📄 *Kode Ruang :* ${kodeopdruang}
// 🗺 *Kode Lokasi :* ${kodelokasi}

handler.help = ['kendi <AB 1056 UD>']
handler.tags = ['bkad']
handler.command = /^(kendi)$/i

export default handler
