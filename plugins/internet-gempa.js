let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
await m.reply(global.wait)
    let res = await (await fetch(`https://cililitan.herokuapp.com/api/infogempa`)).json()
        let str = `*INFO GEMPA*\n\nLokasi : ${res.lokasi}\nKedalaman : ${res.kedalaman}\nKoordinat : ${res.koordinat}\nMagnitude : ${res.magnitude}\nPotensi : ${res.potensi}\nWaktu : ${res.waktu}`
    conn.sendButton(m.chat, await (await fetch(res.map)).buffer(), str, footer, 'BMKG', '#? Update', m)
}

handler.help = ['infobmkg']
handler.tags = ['internet']
handler.command = /^(infobmkg|infogempa)$/i
export default handler
