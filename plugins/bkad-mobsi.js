import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let ihik = args.join(' ').split(' ')
  if (!args[0]) throw 'Masukkan Perintah dan Dev ID \nContoh: .mobsi pulang 256719cfac87abf0'
 await m.reply('Siap bestie,saya otewe mencet tombol ke BKPPD dulu 😅')
 let res = await fetch(`https://api.burhansyam.com/bot/mobsi/?ayo=${ihik[0]}&id=${ihik[1]}`)
// if (!res.ok) throw await res.text()
let json = await res.json()
let { mobsi, status, waktu, nama, nip, opd, jarak, koordinat } = json.result
let kaslak = `🦉 *Rincian Presensi* ${mobsi}
❗ *Status   :* ${status}
🥷🏽 *Nama ASN :* ${nama}
⏲ *Waktu    :* ${waktu}
🚏 *NIP :* ${nip}
🏢 *Alamat OPD :* ${opd}
🎯 *Jarak :* ${jarak}
🗺 *Koordinat :* ${koordinat}
*Silakan cek di riwayat presensi Anda*`      

conn.reply(m.chat, kaslak, m)
}

handler.help = ['mobsi <Opsi DevId>']
handler.tags = ['bkad']
handler.command = /^(mobsi)$/i
