import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
// let [nopol, teks] = text.split ` `

    if (!text) return conn.reply(m.chat, '[βINFOβ] Berapa ID Sambungannya ?\n Contoh : .pdamban 31450', m)

  await m.reply('Sabar bestie saya cek dulu...')
 let res = await fetch(`https://api.beetv.my.id/bot/pdamban/?id=${text}`)
let json = await res.json()
// let { pesan, nosamw, nama, alamat, urstat_smb, urjlw, periode, stand_k, stand_l, pakai, lembar, jml_tag, denda, subtotal, message } = json
let mes = json.result.map((v, i) => `${i + 1}.*Informasi Tagihan PDAM Bantul*
π§ *No Sambungan    :* ${text}
β½οΈ *Nama Pelanggan :* ${v.nama}
π΅ *Alamat          :* ${v.alamat}
π *Telepon        :* ${v.telpon}
β *Periode         :* ${v.BLNTHNREK}
π° *Beban pemakaian:* ${v.AKHIR} - ${v.AWAL} = ${v.JMLPAKAI} M3
π΅ *Beban Pokok   :* ${v.TARIP1}
π§ *Tarif Buka    :* ${v.TARIPBUKA}
π΅ *Denda         :* ${v.TARIPDENDA}
πΈ *Wajib Bayar   :* *${v.JMLHARGA}*
β *Angsuran      :* ${v.ANGSRP} 
β *Angsuran sisa :* ${v.NANGSRP} 
π *Tanggal Bayar :* ${v.TGLBAYAR}`).join('\n\n')
  
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, mes, m)
}

handler.help = ['pdamban <No Sambungan>']
handler.tags = ['info']
handler.command = /^(pdamban)$/i

export default handler
