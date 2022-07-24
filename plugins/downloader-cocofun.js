import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Alamat URL'

let res = await fetch(`https://docs-jojo.herokuapp.com/api/cocofun-no-wm?url=${text}`)
if (!res.ok) throw await res.text()
    
    await m.reply('_Dalam proses, mohon ditunggu..._')
let json = await res.json()
let { download } = json
let pidio = await conn.getFile(`${download}`)
		let caption = `@burhansyam`
                conn.sendFile(m.chat, pidio.data, `get.${pidio}.mp4`, caption, m)
}
handler.help = ['cocofun <url cocofun>']
handler.tags = ['downloader']
handler.command = /^(coco(fun)?)$/i

export default handler
