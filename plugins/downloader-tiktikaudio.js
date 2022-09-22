import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Contoh ${usedPrefix}${command} https://vt.tiktok.com/ZSR9Up4LR/`
    await m.reply('Dalam Proses,silakan tunggu...')
    let res = await fetch(`http://hadi-api.herokuapp.com/api/tiktok?url=${args[0]}`)
    res = await res.json()
    let { original, audio1, audio2 } = res.result.audio_only
    conn.sendFile(m.chat, original, 'tiktok.mp3', `_©burhansyam_`.trim(), m)
// conn.sendButton(m.chat, `Download MP3 : ${original}`, 'Coded by @burhansyam', null, [['Server 2', `${audio1}`]], m)

}
handler.help = ['tiktokaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

export default handler
