import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [teks, nopol, akhir] = text.split ` `

    if (!teks) return conn.reply(m.chat, 'Huruf Depan ? \n contoh : AD, H, K, G, R', m)
    if (!nopol) return conn.reply(m.chat, '[βINFOβ] Berapa Nopolnya ?\n Contoh : .sakpole AD 1061 MP', m)
    if (!akhir) return conn.reply(m.chat, 'Huruf Belakangnya ? \n contoh : MJ, KL, FD', m)  
  await m.reply('Sabar bestie saya cek dulu...')
let res = await fetch(`https://api.beetv.my.id/bot/sakpole/?na=${teks}&no=${nopol}&nc=${akhir}`)
let json = await res.json()
let { kd_wilayah, kode_angka, kd_seri, merek, tipe, model, bbm, warna_tnkb, warna_kb, milikke, thn_buat, cylinder, jml_sumbu, sts_blokir, tgl_stnk, info_nik, thn, bulan, hari, bbn2_pokok, thn2, pnbp, kp, lama_tunggakan, tgl_jatuh_tempo, total_pkb_pokok, total_pkb_denda, jumlah_pkb, total_jr_pokok, total_jr_denda, jumlah_jr, total, lokasi_samsat, tgl_blokir, ket_blokir, tgl_pengenaan, rincian } = json
let detaile = json.rincian.map((v, i) => `${i + 1}. Masa Akhir Berlaku: ${v.masa_akhir_berlaku_pajak}\nLama Tunggakan: ${v.lama_tunggakan}\nPlus Denda: ${v.total}\nKode Terlambat: ${v.terlambat}`).join('\n\n')

let pelat = `π§ *No Polisi :* ${kd_wilayah} ${nopol} ${kd_seri}
β½οΈ *Merk KB   :* ${merek}
π» *Model KB  :* ${model}
π *Tipe KB :* ${tipe}
π *Warna TNKB:* ${warna_tnkb}
π *Warna :* ${warna_kb}
π *Tahun     :* ${thn_buat}
π *Milik ke :* ${milikke}
π *Kode NIK :* ${info_nik}
π *TGL STNK :* ${tgl_stnk}
π *Beban Pokok:* ${bbn2_pokok}
π° *SWD KB    :* ${jumlah_jr}
π΅ *Pajak KB :* ${total_pkb_pokok}
πΈ *Total PKB :* ${total}
π *Jatuh Tempo :* ${tgl_jatuh_tempo}
β½οΈ *Samsat :* ${lokasi_samsat}
π *Rincian Pajak:*\n ${detaile}
`      
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, pelat, m)
}

handler.help = ['sakpole <AD 1061 MP>']
handler.tags = ['info']
handler.command = /^(sakpole)$/i

export default handler
