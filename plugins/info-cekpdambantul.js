import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
// let [nopol, teks] = text.split ` `

    if (!text) return conn.reply(m.chat, '[❗INFO❗] Berapa ID Sambungannya ?\n Contoh : .pdamban 31450', m)

  await m.reply('Sabar bestie saya cek dulu...')
 let res = await fetch(`https://api.burhansyam.com/bot/pdamban/?id=${text}`)
let json = await res.json()
// let { pesan, nosamw, nama, alamat, urstat_smb, urjlw, periode, stand_k, stand_l, pakai, lembar, jml_tag, denda, subtotal, message } = json
let mes = json.result.map((v, i) => `${i + 1}.*Informasi Tagihan PDAM Bantul*
🚧 *No Sambungan    :* ${text}
⛽️ *Nama Pelanggan :* ${v.nama}
🛵 *Alamat          :* ${v.alamat}
🚏 *Telepon         :* ${v.telpon}
❗ *Periode         :* ${v.BLNTHNREK}
💰 *Beban pemakaian :* ${v.AKHIR} - ${v.AWAL} = ${v.JMLPAKAI} M3
💵 *Beban Pokok     :* ${v.TARIP1}
🚧 *Tarif Buka      :* ${v.TARIPBUKA}
💵 *Denda            :* ${v.TARIPDENDA}
💸 *Wajib Bayar     :* *${v.JMLHARGA}*
❗ *Angsuran        :* ${v.ANGSRP} 
❗ *Angsuran sisa   :* ${v.NANGSRP} 
📆 *Tanggal Bayar   :* ${v.TGLBAYAR}`).join('\n')
  
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, mes, m)
}

handler.help = ['pdamban <No Sambungan>']
handler.tags = ['info']
handler.command = /^(pdamban)$/i

export default handler
