import { Tiktok } from 'xfarr-api'
import { tiktokdl } from '@bochilteam/scraper'
import { toAudio, toPTT } from '../lib/converter.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Laah.. url nya mana bestie?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZGJBtcsDq/`
  if (!args[0].match(/tiktok/gi)) throw `url salah`

//   await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {

//   })
  try {
    var anu = await Tiktok(args[0])
    var { url, title, thumbnail, duration, source, medias } = anu
    var { quality, extension, size, formattedSize, } = anu.medias[0]
    await conn.sendMedia(m.chat, medias[2].url, null, {mentions: [m.sender]})
    await conn.sendMedia(m.chat, medias[2].url, null, {ptt: true, mentions: [m.sender]})
    } catch {
    try {
    var anu = await tiktokdl(args[0])
    var { url, title, thumbnail, duration, source, medias, video } = anu
    var { quality, extension, size, formattedSize, } = anu.medias[0]
    let v = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    let a = await(await fetch(v)).buffer()
    let au = await toAudio(a, 'mp4')
    let vn = await toPTT(a, 'mp4') 
    await conn.sendFile(m.chat, au.data, 'tiktok.mp3', '', 0, 0, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: global.db.data.chats[m.chat].useDocument })
    await conn.sendFile(m.chat, vn.data, 'tiktok.opus', '', 0, 1, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: global.db.data.chats[m.chat].useDocument })
  } catch {
    try {
    var anuu = await tiktokdl(args[0])
    var { video, nowm, wm, audio, description  } = anuu
    let v = nowm
    let a = await(await fetch(v)).buffer()
    let au = await toAudio(a, 'mp4')
    let vn = await toPTT(a, 'mp4')
    await conn.sendFile(m.chat, au.data, 'tiktok.mp3', '', 0, 0, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: global.db.data.chats[m.chat].useDocument })
    await conn.sendFile(m.chat, vn.data, 'tiktok.opus', '', 0, 1, { mentions: [m.sender], mimetype: 'audio/mp4', asDocument: global.db.data.chats[m.chat].useDocument })
  } catch {
    throw eror 
    
      }
    }
  }
}
handler.help = ['tiktokaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

export default handler
