import fetch from 'node-fetch'

// let handler = async (m, { conn, text, usedPrefix, command }) => {

let handler = async(m, { conn }) => {
await m.reply('saya carikan dulu kak...')
let res = await fetch(global.API('https://docs-jojo.herokuapp.com', '/api/infoloker'))
    let json = await res.json()
    let pacul = json.result.map((v, i) => `${i + 1}. š­ Perusahaan: ${v.perusahaan}\nš·š½āāļø Profesi: ${v.profesi}\nš§š½āš Pendidikan: ${v.edukasi}\nšŗ Lokasi: ${v.lokasi}\nš·š½āāļø Bagian: ${v.jobFunction}\nš Karier: ${v.levelKarir}\nšµ Gaji: ${v.gaji}\nšØš½āš» Desc Job: ${v.desc}\nš§ Persyaratan: ${v.syarat}\nš Info Lamaran: ${v.link}`).join('\n')
    m.reply(pacul)
//     	          conn.reply(m.chat, mes, m)

}

handler.help = ['loker']
handler.tags = ['pencarian']
handler.command = /^loker$/i
export default handler
