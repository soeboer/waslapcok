import jimp from 'jimp'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import moment from 'moment-timezone'


let tags = {}
const defaultMenu = {
  
  before: `\n> *Tanggal:* %date \n> *Jam:* %time \n> *Aktif:* %uptime\n%readmore`,
  header: '│❏━━⦿❰ *%category* ❱⦿━━❏',
  body: '│┊⬤❱ *%cmd* %islimit %isPremium',
  footer: '│❏━━━━━━⦿',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id' //en
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    
//     let days = ['Ahad', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
//     let dayName = days[d.getDay()];
//     let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]

//     let week = d.toLocaleDateString(locale, { weekday: 'long' })
//     let date = d.toLocaleDateString(locale, {
//       day: 'numeric',
//       month: 'long',
//       year: 'numeric',
//       timeZone: 'Asia/Jakarta'
//     })
//     let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
//     time = time.replace(/[.]/g, ':')
//     let _uptime
//     if (process.send) {
//       process.send('uptime')
//       _uptime = await new Promise(resolve => {
//         process.once('message', resolve)
//         setTimeout(resolve, 1000)
//       }) * 1000
//     }
    
//cobak ganti
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })   
      
      //let vn = './media/tante-tante.mp3'
    let uptime = clockString(_uptime)
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time,
      readmore: readMore
    }
    let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    // const pp = await conn.profilePictureUrl(conn.user.jid, 'image').catch(_ => './src/avatar_contact.png')
    // if (m.isGroup) return conn.sendButton(m.chat, text.trim(), conn.getName(conn.user.jid), pp, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
    //conn.sendHydrated(m.chat, text.trim(), conn.getName(conn.user.jid), await genProfile(conn, m), 'https://youtube.com/channel/UC0hs_I8N3JntK5vO6KogavQ', 'YouTube', null, null, [['Speedtest', _p + 'ping'], ['Owner', _p + 'owner']], m)
   // conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/c82d5c358495e8ef15916.mp4' }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: await conn.getName(conn.user.jid) , templateButtons: [{ quickReplyButton: { displayText: 'Speedtest', id: `${_p}ping` }}, { quickReplyButton: { displayText: 'Owner', id: `${_p}owner` }} ] })
   conn.sendButton(m.chat, `*${wish()}*, *${name}* 👋`, text.trim(), await genProfile(conn, m), [['🚀 Ping', _p + 'ping'], ['🤖 Pemilik', _p + 'owner']], false, { quoted: fkon, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType: '1',
mediaUrl: 'https://sticker.nyc3.cdn.digitaloceanspaces.com/20210862/file_7287261_128x128.webp',
title: ' 🤖 ᵂʰᵃᵗˢᵃᵖᵖ ᴮᵒᵀ 🤖 ',
body: '⚠️ ʷʷʷ.ᵇᵘʳʰᵃⁿˢʸᵃᵐ.ᶜᵒᵐ ⚠️',
thumbnail: fs.readFileSync("./thumbnail.jpg"),
sourceUrl: 'https://www.burhansyam.com'
  }
 } 
})
/*conn.sendFile(m.chat, vn, 'dj1.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})*/
    // conn.sendButton(m.chat, 
    //`*Hi, ${name} 👋*\n\n`, 
  //  text.trim(), './media/marin.jpg', [
// [`Speedtest`, `${_p}ping`],
// [`Owner`, `${_p}owner`]
//], m, {asLocation: true})
  } catch (e) {
    m.reply('An error occurred')
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['general']
handler.alias = ['menu', 'help']
handler.command = /^(menu|help|\?)$/i
handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// function clockString(ms) {
//   let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
//   let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
//   let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
//   return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
// }

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}


// function wish() {
//     let wishloc = ''
//   const time = moment.tz('Asia/Jakarta').format('HH')
//   wishloc = ('Hi')
//   if (time >= 0) {
//     wishloc = ('🌙 Met Jam Pocong')
//   }
//   if (time >= 4) {
//     wishloc = ('🌄 Pageee')
//   }
//   if (time >= 10) {
//     wishloc = ('☀️ Siangg')
//   }
//   if (time >= 15) {
//     wishloc = ('🌅 Soree')
//   }
//   if (time >= 16) {
//     wishloc = ('️🌅Petanggg')
//   }
//   if (time >= 23) {
//     wishloc = ('🌙 Maleeem')
//   }
//   return wishloc
// }

function wish() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let wishloc = "Selamat Dini Hari ☀️"
  if (time >= 4) {
    res = "Selamat Pagi 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌙"
  }
  return wishloc
}

async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}
