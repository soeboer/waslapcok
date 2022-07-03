import fetch from 'node-fetch'


let handler = async (m, {command, conn}) => {
//      let res = await (await fetch('https://hadi-api.herokuapp.com/api/kompas')).json()
     let res = await fetch(global.API('https://hadi-api.herokuapp.com', '/api/beritanasional'))
     let json = await res.json()
     let { judul, articleUrl, date_created, image, desc, body } = json.result[0]
let kompis = `📺 *CNN News*
📢 *Berita:* ${judul}
📁 *Terbit:* ${date_created}
🎯 *Tajuk :* ${desc}
📑 *Berita :* ${body}
🌎 *Link:* ${articleUrl}`
   conn.sendFile(m.chat, image, '', kompis, m)
}

handler.help = ['cnn']
handler.tags = ['berita']
handler.command = /^cnn(news)?$/i
export default handler
