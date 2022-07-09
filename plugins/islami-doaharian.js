import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  var a = await fetch(global.API('https://api.zacros.my.id','/islami/doaseharian'))
//   let json = await res.json()
//   if (res.status != 200) throw json
//   if (json.result.error) throw json.result.message
//   let { surah, arab, latin } = json.result
   var b = JSON.parse(JSON.stringify(a))
   var c = b[Math.floor(Math.random() * b.length)]
   var { surah, arab, latin } = c 
  
  let caption = `
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
