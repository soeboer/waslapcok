import fetch from 'node-fetch'


let handler = async (m, {command, conn}) => {
//      let res = await (await fetch('https://hadi-api.herokuapp.com/api/kompas')).json()
     let res = await fetch(global.API('https://hadi-api.herokuapp.com', '/api/kompas'))
     let json = await res.json()
     let { title, img, time, url } = json.result[0]
let kompis = `📺 *Kompas News*
📢 *Berita:* ${title}
📁 *Type News:* ${time}
🛰 *Source Url:* ${url}`
   conn.sendFile(m.chat, img, '', kompis, m)
}
handler.help = ['kompasnews']
handler.tags = ['berita']
handler.command = /^kompas(news)?$/i

export default handler
