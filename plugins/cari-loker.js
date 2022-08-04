import fetch from 'node-fetch'

// let handler = async (m, { conn, text, usedPrefix, command }) => {

let handler = async(m, { conn }) => {
await m.reply('saya carikan dulu kak...')
let res = await fetch(global.API('https://docs-jojo.herokuapp.com', '/api/infoloker'))
    let json = await res.json()
    let pacul = json.result.map((v, i) => `${i + 1}. 🏭 Perusahaan: ${v.perusahaan}\n👷🏽‍♂️ Profesi: ${v.profesi}\n🧑🏽‍🎓 Pendidikan: ${v.edukasi}\n🗺 Lokasi: ${v.lokasi}\n👷🏽‍♂️ Bagian: ${v.jobFunction}\n📈 Karier: ${v.levelKarir}\n💵 Gaji: ${v.gaji}\n👨🏽‍💻 Desc Job: ${v.desc}\n🚧 Persyaratan: ${v.syarat}\n🌐 Info Lamaran: ${v.link}`).join('\n')
    m.reply(pacul)
//     	          conn.reply(m.chat, mes, m)

}

handler.help = ['loker']
handler.tags = ['pencarian']
handler.command = /^loker$/i
export default handler
