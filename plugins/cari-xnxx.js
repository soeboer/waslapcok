import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mencari film berdasar kata kunci judul/kategori*\ncontoh:\n${usedPrefix + command} abg`
    await m.reply('Sabar bestie saya carikan dulu...')
    let res = await fetch(global.API('https://api.beetv.my.id', '/bot/xnxx/', { q: text }))
    let json = await res.json()
    let xxx = json.result.map((v, i) => `${i + 1}.💋 Judul : ${v.title}\n👙 Info : ${v.info}\n🤏🏼 Link : ${v.link}`).join('\n\n')
    m.reply(xxx)


}

handler.help = ['xnxx <judul/kategori>']
handler.tags = ['pencarian']
handler.command = /^xnxx$/i
export default handler
