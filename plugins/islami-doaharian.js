import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  
await m.reply('saya carikan dulu kak...')
  let res = await fetch(global.API('https://api.zacros.my.id','/islami/doaseharian'))
  var json = await res.json()
//   let { image, hari_ini, description, angka_keberuntungan, peribahasa_cina, about } = json.result
   var c = json.result[Math.floor(Math.random() * json.result.length)]
   var { surah, arab, latin } = c 
  
  var caption = `
*「 Doa Harian 」*
${surah}
${arab}
${latin}
`.trim()
  await m.reply(caption)
}
handler.help = ['doaharian']
handler.tags = ['islami']
handler.command = /^(doaharian)$/i

export default handler
