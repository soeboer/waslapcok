import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
//     if (!text) throw `*Perintah ini untuk mencari kode pos berdasarkan kota/pencarian*\n\ncontoh:\n${usedPrefix + command} Ponjong`
    let res = await fetch(global.API('https://docs-jojo.herokuapp.com', '/api/infoloker'))
//     if (res.status != 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}.🏭 Perusahaan: ${v.perusahaan}\n👷🏽‍♂️ Profesi: ${v.profesi}\n🧑🏽‍🎓 Pendidikan: ${v.edukasi}\n🗺 Lokasi: ${v.lokasi}\n👷🏽‍♂️ Bagian: ${v.jobFunction}\n📈 Karier: ${v.levelKarir}\n👨🏽‍💻 Desc Job: ${v.desc}\n🚧 Persyaratan: ${v.syarat}\n💵 Gaji: ${v.gaji}\n🌐 Info Lamaran: ${v.link}`).join('\n\n')
    m.reply(mes)
//     	          conn.reply(m.chat, mes, m)

}

handler.help = ['loker']
handler.tags = ['pencarian']
handler.command = /^loker$/i
export default handler
