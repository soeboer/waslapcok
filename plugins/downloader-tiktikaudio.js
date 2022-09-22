import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Contoh ${usedPrefix}${command} https://vt.tiktok.com/ZSR9Up4LR/`
    await m.reply('Dalam Proses,silakan tunggu...')
    let res = await fetch(`http://hadi-api.herokuapp.com/api/tiktok?url=${args[0]}`)
    res = await res.json()
    let { original, audio1, audio2 } = res.result.audio_only
//     conn.sendFile(m.chat, original, 'tiktok.mp3', `_©burhansyam_`.trim(), m)
    let sound = `*Tiktok MP3 Donload*
🚧 *Link 1    :* ${audio1}
⛽️ *Link 2  :* ${audio2}
🛵 *Original :* ${original}`
           conn.reply(m.chat, sound, m)    
    

}
handler.help = ['ttmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

export default handler
