import fetch from 'node-fetch'


let handler = async (m, {command, conn}) => {
     let res = await fetch(global.API('https://hadi-api.herokuapp.com', '/api/kompas'))
     let json = await res.json()
     let kompos = json.result.map((v, i) => `${i + 1}.šŗ Judul : ${v.title}\nš¢ Terbit : ${v.time}\nš Link : ${v.url}`).join('\n\n')
     m.reply(kompos)
     
// let { title, img, time, url } = json.result[0]
// let kompis = `šŗ *Kompas News*
// š¢ *Berita:* ${title}
// š *Type News:* ${time}
// š° *Source Url:* ${url}`
//    conn.sendFile(m.chat, img, '', kompis, m)
}
handler.help = ['kompas']
handler.tags = ['berita']
handler.command = /^kompas(news)?$/i

export default handler
