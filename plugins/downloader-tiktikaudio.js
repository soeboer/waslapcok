import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Contoh ${usedPrefix}${command} https://vt.tiktok.com/ZSR9Up4LR/`
//     const { author: { nickname }, video, description } = await tiktokdl(args[0])
//     const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
//     if (!url) throw 'Can\'t download video!'
    await m.reply('Dalam Proses,silakan tunggu..._')
    let res = await fetch(`https://hadi-api.herokuapp.com/api/tiktok?url=${args[0]}`)
    res = await res.json()
    let { audio1, audio2, original } = res.result.audio_only
    conn.sendFile(m.chat, original, 'tiktok.mp3', `_©burhansyam_`.trim(), m)
}
handler.help = ['tiktokaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

export default handler
