import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
// let [nopol, teks] = text.split ` `

    if (!text) return conn.reply(m.chat, '[βINFOβ] Berapa ID Sambungannya ?\n Contoh : .pdamgk 050200292', m)

  await m.reply('Sabar bestie saya cek dulu...')
 let res = await fetch(`https://indotv.my.id/bot/pdamgk/?id=${text}`)
let json = await res.json()
let { pesan, nosamw, nama, alamat, urstat_smb, urjlw, periode, stand_k, stand_l, pakai, lembar, jml_tag, denda, subtotal, message } = json
let pampers = `*Informasi Tagihan PDAM Gunungkidul*
π§ *No Sambungan    :* ${nosamw}
β½οΈ *Nama Pelanggan  :* ${nama}
π΅ *Alamat          :* ${alamat}
π *Periode         :* ${periode}
β *Status Tagihan  :* ${pesan}
π§ *Status Sambungan:* ${urstat_smb}
β *Jumlah Tagihan  :* ${lembar} lembar
π° *Beban pemakaian :* ${stand_k} - ${stand_l} = ${pakai} M3
π΅ *Beban Pokok   :* ${jml_tag}
π΅ *Denda         :* ${denda}
πΈ *Wajib Bayar   :* ${subtotal}
π *Catatan :* ${message}`
  
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, pampers, m)
}

handler.help = ['pdamgk <No Sambungan>']
handler.tags = ['info']
handler.command = /^(pdamgk)$/i

export default handler
