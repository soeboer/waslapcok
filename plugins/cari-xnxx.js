import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mencari Film berdasarkan kata kunci*\n\ncontoh:\n${usedPrefix + command} Montok`
    let res = await fetch(global.API('https://api.burhansyam.com', '/bot/xnxx/', { q: text }))
    if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.results.map((v, i) => `${i + 1}.📀 Judul: ${v.title}\n🎥 Info: ${v.info}\n🔑 Link: ${v.link}`).join('\n\n')
    m.reply(mes)
//     	          conn.reply(m.chat, mes, m)

}

handler.help = ['xnxx <apa>']
handler.tags = ['pencarian']
handler.command = /^xnxx/i
export default handler
