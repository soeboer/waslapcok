import fetch from 'node-fetch'


let handler = async (m, { text }) => {
  let url = await fetch('https://masgi.herokuapp.com/api/cerpen')
  let cerpen = await url.json()
let hasil = `${cerpen.data}`.trim()

  m.reply(hasil)
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^cerpen$/i

export default handler
