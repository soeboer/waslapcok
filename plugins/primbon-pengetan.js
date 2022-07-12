import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [tanggal, bulan, teks] = text.split ` `

    if (!tanggal) return conn.reply(m.chat, 'Tanggal ? \n Contoh : 21', m)  
    if (!bulan) return conn.reply(m.chat, 'Bulan ?\n Contoh : 06', m)
    if (!teks) return conn.reply(m.chat, 'Tahun ? \n Contoh : 2020', m)
  await m.reply('Sabar bestie saya hitung dulu...')
let res = await fetch(`https://api.burhansyam.com/bot/petung/?y=${teks}&m=${bulan}&d=${tanggal}`)
let json = await res.json()
let { wafat, dino3, dino7, dino40, dino100, pendak1, pendak2, nyewu } = json.result

let sedane = `
*Dinten Pengetan Sedo* \n
📆 *Geblak :*\n ${wafat}
📆 *3 Hari  :*\n ${dino3}
📆 *7 Hari  :*\n ${dino7}
📆 *40 Hari :*\n ${dino40}
📆 *100 hari :*\n ${dino100}
📆 *Pendak 1 :*\n ${pendak1}
📆 *Pendak 2 :*\n ${pendak2}
📆 *1000 Hari :*\n ${nyewu}
`      
           conn.reply(m.chat, sedane, m)
}

handler.help = ['pengetan <21 04 2020>']
handler.tags = ['primbon']
handler.command = /^(pengetan)$/i

export default handler
