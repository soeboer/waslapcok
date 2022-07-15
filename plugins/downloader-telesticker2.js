import { Telesticker } from 'xfarr-api'
import { stickerTelegram } from '@bochilteam/scraper'

let handler = async (m, { conn, args }) => {
	if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let res = await Telesticker(args[0])
		await m.reply(`Mengirim ${res.length} stickers...`)
		if (m.isGroup && res.length > 30) {
			await m.reply('Stiker lebih dari 30, akan dikirim via private chat.')
			for (let i = 0; i < res.length; i++) {
				conn.sendMessage(m.sender, { sticker: { url: res[i].url }})
			}
		} else {
			for (let i = 0; i < res.length; i++) {
				conn.sendMessage(m.chat, { sticker: { url: res[i].url }})
			}
		}
	} else if (args && args.join(' ')) {
		let [query, page] = args.join(' ').split('|')
		let res = await stickerTelegram(query, page)
		if (!res.length) throw `Pencarian "${args.join(' ')}" Gagal`
		m.reply(res.map(v => `*${v.title}*\n_${v.link}_`).join('\n\n'))
	} else throw 'Telesticker Url'
}
handler.help = ['telesticker <link>']
handler.tags = ['downloader']
handler.command = /^(telestic?ker|stic?kertele)$/i

export default handler
