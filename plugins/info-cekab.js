import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [nopol, teks] = text.split ` `

    if (!nopol) return conn.reply(m.chat, '[❗INFO❗] Berapa Nopolnya ?\n Contoh : .cekab 1895 MD', m)
    if (!teks) return conn.reply(m.chat, 'Huruf Belakangnya ?', m)
  await m.reply('Sabar bestie saya cek dulu...')
 let res = await fetch(`https://api.burhansyam.com/bot/pajek/?no=${nopol}&dd=${teks}`)
let json = await res.json()
let { nopolisi, nmmerekkb, nmmodelkb, tahunkb, swdkllj, pkb, pkbswd, tgakhirpkb } = json.result[0]
let pelat = `
🚧 *No Pol    :* ${nopolisi}
⛽️ *Merk KB  :* ${nmmerekkb}
🛵 *Model KB:* ${nmmodelkb}
🚏 *Tahun       :* ${tahunkb}
💰 *SWD KB  :* ${swdkllj}
💵 *Pajak KB:* ${pkb}
💸 *PKB SWD :* ${pkbswd}
📆 *Akhir Pajak:* ${tgakhirpkb}
  
//  conn.reply(m.chat, `${res.result}`, m)
           conn.reply(m.chat, pelat, m)
}

handler.help = ['cekab <1895 MD>']
handler.tags = ['info']
handler.command = /^(cekab)$/i

export default handler
