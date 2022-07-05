import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*Perintah ini untuk mencari kode pos berdasarkan kota/pencarian*\n\ncontoh:\n${usedPrefix + command} Ponjong`
    let res = await fetch(global.API('https://kodepos.vercel.app', '/search', { q: text }))
    if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
         
//          let { province, city, subdistrict, urban, postalcode } = json.data
         let kopos = json.data.map((v) => `Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join`\n`                                                 
//`${i + 1}. Provinsi: ${v.province}\nKota: ${v.city}\nKecamatan: ${v.subdistrict}\nPerkotaan: ${v.urban}\nKode Pos: ${v.postalcode}`).join('\n\n')
  
m.reply(`${kopos}`)
}

handler.help = ['kodepos].map(v => v + ' <query>'']
handler.tags = ['pencarian']
handler.command = /^kodepos$/i
export default handler
