import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Alamat URL'

let res = await fetch(`https://api.zekais.com/igdl2?apikey=zekais&url=${text}`)
if (!res.ok) throw await res.text()
    
    await m.reply('_Dalam proses, mohon ditunggu..._')
let json = await res.json()
let { url } = json.result[0]
let pidio = await conn.getFile(`${url}`)
		let caption = `@burhansyam`
                conn.sendFile(m.chat, pidio.data, `get.${pidio}.mp4`, caption, m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.alias = ['ig', 'igdl', 'instagram', 'instagramdl']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler
