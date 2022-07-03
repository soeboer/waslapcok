import fetch from 'node-fetch'


let handler = async (m, {command, conn}) => {
//      let res = await (await fetch('https://hadi-api.herokuapp.com/api/kompas')).json()
     let res = await fetch(global.API('https://hadi-api.herokuapp.com', '/api/detik'))
     let json = await res.json()
     let { title, img_url, Time, link_url } = json.result[0]
let kompis = `📺 *Detik News*
📢 *Berita:* ${title}
📁 *Terbit:* ${Time}
🛰 *Source Url:* ${link_url}`
   conn.sendFile(m.chat, img_url, '', kompis, m)
}

handler.help = ['detik']
handler.tags = ['berita']
handler.command = /^detik(news)?$/i

export default handler
