import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { text, usedPrefix, command }) => {
    if (!text) throw `Group WA yg dicari?\n\ncontoh:\n${usedPrefix + command} janda`
    let res = await carigroup(text, 'name')
    if (!res.length) throw 'Group tidak ditemukan!'
    let teks = res.map(res => res.subject + '\n' + res.link).join('\n────────────\n')
    let image = 'https://telegra.ph/file/f5ec51bac808f543ef1d7.png'
//     conn.sendButton(m.chat, await(await fetch(image)).buffer(),teks,wm,'Jangan Di Pencet', 'huuu', m)
    m.reply(teks)
    
}
handler.help = ['carigrup <pencarian>']
handler.tags = ['pencarian']
handler.command = /^carig(ro?up|c)/i

export default handler


async function carigroup(search, searchby = 'name') {
    let { data } = await axios.get(global.API('http://ngarang.com', '/link-grup-wa/daftar-link-grup-wa.php', {
        search: encodeURIComponent(search),
        searchby,
    }))
    let $ = cheerio.load(data)
    let results = []
    $('#content > div.entry.clearfix > div.wa-chat').each(function (index, element) {
        let subject = $(this).find('div > div.wa-chat-title-container > a > div > div').text().trim()
        let link = $(this).find('div > div.wa-chat-message > a').attr('href').trim()
        results.push({
            subject,
            link
        })
    })
    return results
}
