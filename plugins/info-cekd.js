import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [teks, nopol, akhir] = text.split ` `

    if (!teks) return conn.reply(m.chat, 'Huruf Depan ? \n contoh : D, Z', m)
    if (!nopol) return conn.reply(m.chat, '[βINFOβ] Berapa Nopolnya ?\n Contoh : .sambara D 1268 AHK', m)
    if (!akhir) return conn.reply(m.chat, 'Huruf Belakangnya ? \n contoh : AHK, AAA, BBB', m)  
  await m.reply('Sabar bestie saya cek dulu...')
let res = await fetch(`https://api.beetv.my.id/bot/sambara/?aa=${teks}&bb=${nopol}&cc=${akhir}`)
let json = await res.json()
let { no_polisi_display, no_rangka, no_bpkb, wilayah, milik_ke, nm_merek_kb, nm_model_kb, warna_kb, th_buatan, tg_akhir_pajak, tg_akhir_stnkb, pkb_pok, pkb_den, swd_pok, swd_den, adm_stnk, adm_tnkb, jumlah, nm_bank, no_mesin_display } = json.data[0]

let pelat = `π§ *No Polisi :* ${no_polisi_display}
β½οΈ *Merk KB   :* ${nm_merek_kb}
π» *Model KB  :* ${nm_model_kb}
π *Warna :* ${warna_kb}
π *Tahun     :* ${th_buatan}
π *No Rangka :* ${no_rangka}
π *No Mesin :* ${no_mesin_display}
π *Milik ke :* ${milik_ke}
π *Akhir Pajak :* ${tg_akhir_pajak}
π *Akhir STNK :* ${tg_akhir_stnkb}
π° *SWD KB    :* ${swd_pok}
π *SWD Denda:* ${swd_den}
π΅ *Pajak KB :* ${pkb_pok}
πΈ *Total PKB :* ${jumlah}
β½οΈ *Wilayah :* ${wilayah}`      

           conn.reply(m.chat, pelat, m)
}

handler.help = ['sambara <D 1268 AHK>']
handler.tags = ['info']
handler.command = /^(sambara)$/i

export default handler
