import fetch from 'node-fetch'


let handler = async (m, { text }) => {
  let url = await fetch('https://indotv.my.id/bot/cersex.php')
  let json = await url.json()
let { result } = json
let hasil = `${result}`

  m.reply(hasil)
}
handler.help = ['cersex']
handler.tags = ['fun']
handler.command = /^cersex$/i

export default handler
