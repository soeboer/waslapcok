let handler = async (m, {command, conn}) => {
  
    let er = `
┌〔 Pilihan 〕
├ Cecan
├ Chinese	
├ Indonesia
├ Japan
├ Korea
├ Malaysia	
├ Ptl
├ Thailand
├ Vietnam
└────
contoh:
${usedPrefix + command} cecan
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'cecan':
        case 'chinese':
        case 'indonesia':
        case 'japan':
        case 'korea':
        case 'malaysia':
        case 'ptl':
        case 'thailand':     
        case 'vietnam':          
            let text = args.slice(1).join(' ')
            
await m.reply('dalam proses...')
let img = await conn.getFile(`https://hadi-api.herokuapp.com/api/randomImage/${text}?apikey=FZDEVELOPER`)
var capt = `🐦 Koleksi Random Foto 🗿`
        conn.sendButton(m.chat, `_${command}_`.trim(), capt, img.data, [['😋 lanjut 🤗', `/${command} ${text}`]], m)

            break
        default:
            throw er
    }
}
handler.help = ['Asupan Wallpaper']
handler.tags = ['fun']

handler.command = /^(asupan|cuss)$/i

export default handler
