import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
import { join } from 'path'
import { promises } from 'fs'
import moment from 'moment-timezone'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
    let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
    let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
  const used = process.memoryUsage()
  const cpus = _cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let old = performance.now()
  let neww = performance.now()
  let speed = neww - old
    conn.sendHydrated(m.chat, 
    '*––––––『 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 』––––––*', 
`🤖 𝗡𝗮𝗺𝗮 : ${_package.name}
🧩 𝗩𝗲𝗿𝘀𝗶 : ${_package.version}
📚 𝗟𝗶𝗯𝗿𝗮𝗿𝘆 : ${_package.description}

⏳ 𝗛𝗶𝗱𝘂𝗽 : ${uptime}
📈 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 : ${totalreg}

📅 𝗛𝗮𝗿𝗶 : ${date}
⌚ 𝗝𝗮𝗺 : ${time} ﹙ɢᴍᴛ +7:00﹚

💻 🅂🄴🅁🅅🄴🅁 🄸🄽🄵🄾 :
⮕ ᴩɪɴɢ: ${speed} ᴍs
⮕ ʀᴀᴍ: ${format(totalmem() - freemem())} / ${format(totalmem())}

💬 ᴡʜᴀᴛsᴀᴩᴩ sᴛᴀᴛᴜs :
⮕ ${groupsIn.length} - Group Chats
⮕ ${groupsIn.length} - Groups Joined
⮕ ${groupsIn.length - groupsIn.length} - Groups Left
⮕ ${chats.length - groupsIn.length} - Personal Chats
⮕ ${chats.length} - Total Chats
`.trim(), '', 'https://www.burhansyam.com', '🤖 𝐊𝐚𝐧𝐝𝐚𝐧𝐠 𝐁𝐨𝐭', null, null, [
[`💻 𝐊𝐚𝐧𝐠 𝐑𝐞𝐦𝐨𝐭`, `${usedPrefix}owner`],
], m, {asLocation: true})
}
handler.help = ['botinfo']
handler.tags = ['info']
handler.command = /^(botinfo|bot|info|bi)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
