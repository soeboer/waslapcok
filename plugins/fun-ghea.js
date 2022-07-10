import fetch from 'node-fetch'

let handler = async(m, { conn }) => {
  let res = await fetch('https://docs-jojoapi.herokuapp.com/api/asupan/ghea?apikey=Syaa')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result.url) throw 'Error!'
  conn.sendFile(m.chat, json.result.url, '', '*Random Ghea Youbi*', m)
}

handler.help = ['ghea']
handler.tags = ['fun']
handler.command = /^(ghea)$/i

export default handler
