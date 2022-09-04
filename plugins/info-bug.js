import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `
┌〔 Pilihan 〕
├ Merah
├ Biru
├ Ungu
├ Kuning
└────

contoh:
${usedPrefix + command} merah
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'merah':
        case 'biru':
        case 'ungu':
        case 'kuning':
            let text = args.slice(1).join(' ')
//             let res = await fetch('https://api.burhansyam.com/bot/injek/asu.json?k=' + args[0].toLowerCase()))
//             if (!res.ok) throw eror
//             let json = await res.json()
//             if (!json.result[0]) throw json
//             let { merah, kuning, ungu, biru } = json.result[0]
            
            let res = await axios("https://api.beetv.my.id/bot/injek/bug.json?k=" + args[0].toLowerCase())
            let json = res.data
            let bugs = json.bugs
            
//             let jancuk = `
//             ✨ *Merah :* \n${merah}
//             🎆 *Biru :* \n${biru}
//             💬 *Ungu :* \n${ungu}
//             💌 *Kuning :* \n${kuning}`            
           
//             m.reply(json.message)

            
            conn.reply(m.chat, `${bugs}` .trim(), m)
            break
        default:
            throw er
    }
}
handler.help = ['bug'].map(v => v + ' <opsi>')
handler.tags = ['info']
handler.command = /^bug$/i

export default handler
