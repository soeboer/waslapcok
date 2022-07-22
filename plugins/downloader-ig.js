// import * as scraper from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Alamat URL'
//     let res = await scraper.instagramdl(args[0])
//         .catch(async _ => await scraper.instagramdlv2(args[0]))
//         .catch(async _ => await scraper.instagramdlv3(args[0]))
//         .catch(async _ => await scraper.instagramdlv4(args[0]))
    let res = await fetch(`https://api.zekais.com/igdl2?apikey=zekais&url=${text}`)
    let json = await res.json()
//     if (!res) throw 'Can\'t download the post'

    await m.reply('_Dalam proses, mohon ditunggu..._')
    for (let { url } of json.result[0]) await m.conn.sendFile(m.chat, url, '', '', m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.alias = ['ig', 'igdl', 'instagram', 'instagramdl']
handler.command = /^(ig(dl)?|instagram(dl)?)$/i

export default handler
