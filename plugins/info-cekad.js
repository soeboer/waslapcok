import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [teks, nopol, akhir] = text.split ` `

    if (!teks) return conn.reply(m.chat, 'Huruf Depan ? \n contoh : AD, H, K, G, R', m)
    if (!nopol) return conn.reply(m.chat, '[❗INFO❗] Berapa Nopolnya ?\n Contoh : .cekad AD 1061 MP', m)
    if (!akhir) return conn.reply(m.chat, 'Huruf Belakangnya ? \n contoh : MJ, KL, FD', m)  
  await m.reply('Sabar bestie saya cek dulu...')
let res = await fetch(`https://api.burhansyam.com/bot/sakpole/?na=${teks}&no=${nopol}&nc=${akhir}`)
let json = await res.json()
let { kd_wilayah, kode_angka, kd_seri, merek, tipe, model, bbm, warna_tnkb, milikke, thn_buat, cylinder, jml_sumbu, sts_blokir, tgl_stnk, info_nik, thn, rincian, bulan, hari, bbn2_pokok, thn2, pnbp, kp, lama_tunggakan, tgl_jatuh_tempo, total_pkb_pokok, total_pkb_denda, jumlah_pkb, total_jr_pokok, total_jr_denda, jumlah_jr, total, lokasi_samsat, tgl_blokir, ket_blokir, tgl_pengenaan, rincian } = json
// let wilayah = json.kd_wilayah
// let nopol = json.kode_angka
// let akhire = json.kd_seri
// let merek = json.merek
// let tipe = json.tipe
// let model = json.model
// let bbm = json.bbm
// let warnane = json.warna_tnkb
// let milike = json.milikke
// let tahun = json.thn_buat
// let tgl_stnk = json.tgl_stnk
// let info_nik = json.info_nik
// let lama_tunggakan = json.lama_tunggakan
// let tgl_jatuh_tempo = json.tgl_jatuh_tempo
// let bbn2_pokok = json.bbn2_pokok
// let jumlah_jr = json.jumlah_jr
// let total_pkb_pokok = json.total_pkb_pokok
// let total = json.total
// let lokasi_samsat = json.lokasi_samsat
let detaile = json.rincian.map((v, i) => `${i + 1}. Masa Akhir Berlaku: ${v.masa_akhir_berlaku_pajak}\nLama Tunggakan: ${v.lama_tunggakan}\nPlus Denda: ${v.total}\nKode Terlambat: ${v.terlambat}`).join('\n\n')

let pelat = `
🚧 *No Pol    :* ${kd_wilayah} ${nopol} ${kd_seri}
⛽️ *Merk KB  :* ${merek}
🛻 *Model KB:* ${model}
🚗 *Tipe KB:* ${tipe}
🚌 *Warna TNKB:* ${warna_tnkb}
🚏 *Tahun     :* ${thn_buat}
📆 *TGL STNK:* ${tgl_stnk}
💰 *SWD KB  :* ${jumlah_jr}
💵 *Pajak KB:* ${total_pkb_pokok}
💸 *Total PKB :* ${total}
📆 *Jatuh Tempo:* ${tgl_jatuh_tempo}
⛽️ *Samsat:* ${lokasi_samsat}
⛽️ *Rincian:*\n ${detaile}
`      
//⛽️ *Rincian:* ${rincian}
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, pelat, m)
}

handler.help = ['cekad <AD 1061 MP>']
handler.tags = ['info']
handler.command = /^(cekad)$/i

export default handler
