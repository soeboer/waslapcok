import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
// let [teks, nopol, akhir] = text.split ` `
    if (!text) return conn.reply(m.chat, 'ID Pelanggan ? \n contoh : .pln 521050558087)
  await m.reply('Sabar bestie saya cek dulu...')
let res = await fetch(`https://api.burhansyam.com/bot/pln/?id=${text}`)
let json = await res.json()
let { print, bill_number, bill_period } = json
let pelan = `🚧 *Tagihan PLN Periode : ${bill_period}
${print}`      
           conn.reply(m.chat, pelan, m)
}

handler.help = ['cekpln <ID Pelanggan>']
handler.tags = ['info']
handler.command = /^(cekpln)$/i

export default handler
