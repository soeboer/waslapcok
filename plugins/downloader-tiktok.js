import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Contoh ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
//     const { author: { nickname }, video, description } = await tiktokdl(args[0])
//     const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
//     if (!url) throw 'Can\'t download video!'
    await m.reply('Dalam Proses,silakan tunggu..._')
    let res = await fetch(`https://hadi-api.herokuapp.com/api/tiktok?url=${args[0]}`)
    res = await res.json()
    let { nowm, mp4, original } = res.result.video
    conn.sendFile(m.chat, nowm, 'tiktok.mp4', `_©burhansyam_`.trim(), m)
}
handler.help = ['tiktokdl'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

export default handler
