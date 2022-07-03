import cp from 'child_process'
import { promisify } from 'util'
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	await conn.reply(m.chat, `Sabaaar Maszeeh mencari server terdekat...`, m)
    let o
    try {
        o = await exec('python speed.py')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) conn.sendButton(m.chat, `${htki} SPEEDTEST.NET ${htka}`, stdout, null, [[" 📒 MENU", ".menu"],[" 💻 PING", ".ping"]], m)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(speedtest)$/i

export default handler
