import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[βINFOβ] Masukan Kode QR Aset* \n Contoh : .cekqr 201700667583`
  await m.reply('π΅οΈ Sabar, Kami cek di SIM ASET dulu...')
//  let res = await fetch(`https://aset.simda.net/2022/ai_cha/?qrcode=${text}`)
 let res = await fetch(`https://api.beetv.my.id/bot/aset/?qrcode=${text}`)

  if (!res.ok) throw await res.text()
let json = await res.json()
let { qrcode, kodekib, namabarang, tahunperolehan, nilaibarang, kodebarang, kodeopd, opd, status, kodelokasi, koderuang, ruang, kodeopdruang, penanggungjawab, lokasi } = json.result

let asetku = `*Detail Barang dalam SIM ASET :*
π² *Kode QR    :* ${qrcode}
π *Kode KIB   :* ${kodekib}
π¦ *Nama Barang :* ${namabarang}
π° *Nilai Barang :* Rp ${nilaibarang}
π *Tahun Perolehan :* ${tahunperolehan}
π  *Nama OPD :* ${opd}
π» *Status Barang :* ${status}
πΎ *Kode Barang :* ${kodebarang}
π *Ruang :* ${ruang}
π *Kode Ruang :* ${kodeopdruang}
πΊ *Kode Lokasi :* ${kodelokasi}
π§ββοΈ *Penanggung Jawab:* ${penanggungjawab}
π *Lokasi Barang:* \n${lokasi}`      
           conn.reply(m.chat, asetku, m)
}
// π¨ *Kode OPD Ruang :* ${kodeopdruang}

handler.help = ['cekqr <kodeqr aset>']
handler.tags = ['bkad']
handler.command = /^(cekqr)$/i

export default handler
