import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk melacak pelayanan SIPAPAH berdasarkan nomor pelayanan *\n\ncontoh:\n${usedPrefix + command} 20220727-072`
    let res = await fetch(global.API('https://api.beetv.my.id', '/bot/lc/', { q: text }))
//     if (res.status != 0) throw await res.text()
    let json = await res.json()
//     if (!json.status) throw json
    let papah = json.data.map((v, i) => `${i + 1}. Nomor Pendaftaran: ${v.NOPEN}\nNama Pemohon: ${v.NAMA_PEMOHON}\nAlamat Pemohon: ${v.ALAMAT_PEMOHON}\nPembuatan: ${v.CREATE_DATE}\nStatus Pelayanan: ${v.STATUS_PELAYANAN}\nJenis Pelayanan: ${v.NM_JENIS_PELAYANAN}\nNama Termohon: ${v.NAMA_TERMOHON}\nKode: ${v.KODE}\nDetail Nomor Pelayanan: ${v.NOPEN_DETAIL}`).join('\n\n')
    m.reply(papah)
//     	          conn.reply(m.chat, mes, m)

}

handler.help = ['cekpapah <no pelayanan>']
handler.tags = ['bkad']
handler.command = /^cekpapah$/i
export default handler
