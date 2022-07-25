import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[❗INFO❗] Masukan Nomor Objek Pajak* \n Contoh : .ceknop 3403080008001002602020`
  await m.reply('Sabar kak saya cek dulu...')
 let res = await fetch(`https://api.burhansyam.com/bot/pbb/?nop=${text}`)
if (!res.ok) throw await res.text()
let json = await res.json()
let { tahun, nama_wp, alamat_wp, alamat_op, bumi, bangunan, njop, status, tempo, piutang } = json.result
let piutang = json.result.piutang.map((v, i) => `${i + 1}.📆 Tahun : ${v.tahun}\n💰 Pokok :Rp ${v.nilnil}\n💵 Denda :Rp ${v.denda}\n💸 Piutang :Rp ${v.totden}`).join('\n\n')
let pajek = `
📆 *Tahun    :* ${tahun}
⛽️ *Status   :* ${status}
🧕🏾 *Nama WP:* ${nama_wp}
🚏 *Alamat WP:* ${alamat_wp}
🎯 *Alamat OP:* ${alamat_op}
💵 *Jumlah Bayar:* \n${njop}
❗ *Jatuh Tempo:* ${tempo}
💸 *Data Piutang:* \n${piutang}`      
           conn.reply(m.chat, pajek, m)
}


// 💵 *Objek Pajak :*
// 💰 *Bumi:* ${bumi}
// 💸 *Bangunan :* ${bangunan}

handler.help = ['ceknop <nmr objek pajak>']
handler.tags = ['info']
handler.command = /^(ceknop)$/i

export default handler
