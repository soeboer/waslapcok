import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (!text) throw `*[βINFOβ] Masukan Nomor Objek Pajak* \n Contoh : .ceknop 3403080008001002602020`
  await m.reply('Sabar kak saya cek dulu...')
 let res = await fetch(`https://api.beetv.my.id/bot/pbb/?nop=${text}`)
if (!res.ok) throw await res.text()
let json = await res.json()
let { tahun, nama_wp, alamat_wp, alamat_op, bumi, bangunan, njop, status, tempo, piutang } = json.result
let kutang = json.result.piutang.map((v, i) => `${i + 1}.π Tahun : ${v.tahun}\nπ° Pokok :Rp ${v.nilnil}\nπ΅ Denda :Rp ${v.denda}\nπΈ Piutang :Rp ${v.totden}`).join('\n\n')
let pajek = `*Rincian Data SPPT*
π *Tahun    :* ${tahun}
β½οΈ *Status   :* ${status}
π§πΎ *Nama WP:* ${nama_wp}
π *Alamat WP:* ${alamat_wp}
π― *Alamat OP:* ${alamat_op}
π΅ *Jumlah Bayar:* \n${njop}
β *Jatuh Tempo:* ${tempo}
πΈ *Data Piutang:* \n${kutang}
`      

conn.reply(m.chat, pajek, m)
}


// π΅ *Objek Pajak :*
// π° *Bumi:* ${bumi}
// πΈ *Bangunan :* ${bangunan}

handler.help = ['ceknop <nmr objek pajak>']
handler.tags = ['bkad']
handler.command = /^(ceknop)$/i

export default handler
