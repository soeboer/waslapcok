import fetch from 'node-fetch'

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
            let res = await fetch(global.API('bubur', '/bot/injek/asu.json?k=' + args[0].toLowerCase()))
            if (!res.ok) throw eror
            let json = await res.json()
            if (!json.result[0]) throw json
            let { merah, kuning, ungu, biru } = json.result[0]
            
            let jancuk = `
            ✨ *Merah :* \n${merah}
            🎆 *Biru :* \n${biru}
            💬 *Ungu :* \n${ungu}
            💌 *Kuning :* \n${kuning}`            
            
//             let { args[0] } = json.result[0]
//             m.reply(json.message)
//             conn.sendButton(m.chat, `Tsel :\n ${merah}\n\nXL :\n${biru}_ ~`, `\n\nAxis :\n${ungu}`, [['blablabla']], m)
            conn.reply(m.chat, `${jancuk}` .trim(), m)
            break
        default:
            throw er
    }
}
handler.help = ['bug'].map(v => v + ' <opsi>')
handler.tags = ['tools']
handler.command = /^bug$/i

export default handler
