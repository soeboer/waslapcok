import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[βINFOβ] Masukan Nomor Polisi* \n Contoh : .kendi AB 1060 UD`
  await m.reply('π΅οΈ Sabar, Kami cek di SIM ASET dulu...')
//  let res = await fetch(`https://aset.simda.net/2022/ai_cha/?qrcode=${text}`)
 let res = await fetch(`https://api.beetv.my.id/bot/nopol/?nopol=${text}`)

  if (!res.ok) throw await res.text()
let json = await res.json()
let { qrcode, kodekib, namabarang, pkb, merk, model, tahunperolehan, nilaibarang, kodebarang, kodeopd, opd, status, kodelokasi, koderuang, ruang, kodeopdruang, penanggungjawab, lokasi, tglstnk,  } = json.result

let asetku = `*Detail Barang dalam SIM ASET :*
π *Nomor Polisi :* ${text}
π¦ *Jenis :* ${namabarang}
π¨ *Merk :* ${merk}
π *Model :* ${model}
π° *Nilai Barang :* Rp ${nilaibarang}
π *Tahun Perolehan :* ${tahunperolehan}
π  *Nama OPD :* ${opd}
π» *Status Barang :* ${status}
π² *Kode QR    :* ${qrcode}
π *Akhir Pajak   :* ${tglstnk}
π΅ *Pajak Kendaraan :* ${pkb}
πΎ *Kode Barang :* ${kodebarang}
π *Ruang :* ${ruang}
π§ββοΈ *Penanggung Jawab :* ${penanggungjawab}
π *Lokasi Barang :* \n${lokasi}`      
           conn.reply(m.chat, asetku, m)
}
// π¨ *Kode OPD Ruang :* ${kodeopdruang}
// π *Kode Ruang :* ${kodeopdruang}
// πΊ *Kode Lokasi :* ${kodelokasi}

handler.help = ['kendi <AB 1056 UD>']
handler.tags = ['bkad']
handler.command = /^(kendi)$/i

export default handler
