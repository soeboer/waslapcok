import fetch from 'node-fetch'


let handler = async (m, {command, conn}) => {

     let src = await (await fetch('https://hadi-api.herokuapp.com/api/kompas')).json()
    let json = src[Math.floor(Math.random() * src.length)]
//     let json = await res.json()
let { title, img, time, url } = json.result[0]
let kompis = `📺 *Kompas News*
📢 *Berita:* ${title}
📁 *Type News:* ${time}
🛰 *Source Url:* ${url}`
        conn.sendButton(m.chat, `_${command}_`.trim(), kompis, img, [['😋 Lanjut Baca 🤗', `/${command}`]], m)
}
handler.help = ['kompasnews']
handler.tags = ['berita']
handler.command = /^kompas(news)?$/i

export default handler
