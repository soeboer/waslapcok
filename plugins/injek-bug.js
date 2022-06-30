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
${usedPrefix + command} tsel
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'merah':
        case 'biru':
        case 'ungu':
        case 'kuning':
            let text = args.slice(1).join(' ')
            let res = await fetch(global.API('bubur', '/bot/injek/' + args[0].toLowerCase(), 'APIKEY'))
            if (!res.ok) throw eror
            let json = await res.json()
            if (!json.status) throw json
            m.reply(json.message)
            break
        default:
            throw er
    }
}
handler.help = ['bug'].map(v => v + ' <opsi>')
handler.tags = ['tools']
handler.command = /^bug$/i

export default handler
