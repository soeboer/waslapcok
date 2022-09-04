import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [kurir, teks] = text.split ` `

let listkurir = `
*Jasa Kirim / Kurir:*
jnt, jne, pos, spx, anteraja, sicepat, wahana, tiki, ninja, ide, lion,
indahcargo, indopaket, jexpress, rpx, rex, sap, pcp, dse, first, idl
`.trim()

    if (!kurir) return conn.reply(m.chat, listkurir, m)
    if (!teks) return conn.reply(m.chat, 'Kode Resinya ?', m)
  await m.reply('Sabar Kak saya cek dulu...')
   let res = await fetch(`https://api.beetv.my.id/bot/resi2/?kurir=${kurir}&resi=${teks}`)
   
 let json = await res.json()
let { origin, destination, status, shipper, receiver, service, courier, weight, waybill, date, manifest } = json.details
let riwayat = json.manifest.map((v, i) => `${i + 1}.🚀 ${v.description}\n🚏 ${v.date}`).join('\n\n')

let hasil = `📦 *Status :* ${status}
📃 *Nomor Resi   :* ${waybill}
🛻 *Kurir  :* ${courier}
⛽️ *Jenis :* ${service}
🚌 *Pengirim :* ${shipper}
📤 *Asal :* ${origin}
🚚 *Penerima     :* ${receiver}
📥 *Tujuan :* ${destination}
🛒 *Berat :* ${weight}
📆 *Input Proses :* ${date}
📝 *Riwayat Pengiriman:*\n ${riwayat}`        
   
           conn.reply(m.chat, hasil, m)
}

handler.help = ['cekresi2 <kurir noresi>']
handler.tags = ['info']
handler.command = /^(cekresi2)$/i

export default handler 
