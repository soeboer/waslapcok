import fetch from 'node-fetch'

let handler = async (m, {command, conn}) => {
     let res = await fetch(global.API('https://docs-jojo.herokuapp.com', '/api/jadwal-bola'))
     let json = await res.json()
     let bol = json.map((v, i) => `${i + 1}.📆 Tanggal : ${v.tanggal}\n⌚️ Jam : ${v.jam}\n📊 Liga : ${v.liga}\n⚽️ Pertandingan : ${v.match}\n📺 Channel : ${v.ch_tv}`).join('\n\n')
     m.reply(bol)
}
handler.help = ['jadwalbola']
handler.tags = ['info']
handler.command = /^jadwalbola(live)?$/i

export default handler
