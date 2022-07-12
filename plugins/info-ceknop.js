import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nomor Objek Pajak* \n Contoh : .ceknop 3403080008001002602020`
  await m.reply('Sabar kak saya cek dulu...')
 let res = await fetch(`https://api.burhansyam.com/bot/pbb/?nop=${text}`)
if (!res.ok) throw await res.text()
let json = await res.json()
let { tahun, nama_wp, alamat_wp, alamat_op, bumi, bangunan, NJOP, status, tempo } = json.result

let pajek = `
📆 *Tahun    :* ${tahun}
⛽️ *Status   :* ${status}
🧕🏾 *Nama WP:* ${nama_wp}
🚏 *Alamat WP:* ${alamat_wp}
🎯 *Alamat OP:* ${alamat_op}
💵 *Jumlah Bayar:* \n ${NJOP}
❗ *Jatuh Tempo:* ${tempo}`      
           conn.reply(m.chat, pajek, m)
}


// 💵 *Objek Pajak :*
// 💰 *Bumi:* ${bumi}
// 💸 *Bangunan :* ${bangunan}

handler.help = ['ceknop <nmr objek pajak>']
handler.tags = ['info']
handler.command = /^(ceknop)$/i

export default handler
