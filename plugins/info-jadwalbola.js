import fetch from 'node-fetch'

let handler = async (m, {command, conn}) => {
     let res = await fetch(global.API('https://docs-jojo.herokuapp.com', '/api/jadwal-bola'))
     let json = await res.json()
     let bol = json.map((v, i) => `${i + 1}.đ Tanggal : ${v.tanggal}\nâď¸ Jam : ${v.jam}\nđ Liga : ${v.liga}\nâ˝ď¸ Pertandingan : ${v.match}\nđş Channel : ${v.ch_tv}`).join('\n\n')
     m.reply(bol)
}
handler.help = ['jadwalbola']
handler.tags = ['info']
handler.command = /^jadwalbola(live)?$/i

export default handler
