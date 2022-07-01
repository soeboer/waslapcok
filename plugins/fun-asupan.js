let handler = async (m, { args, usedPrefix, command }) => {
  
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
            let pilih = args[0].toLowerCase()
await m.reply('dalam proses...')
let img = await conn.getFile(`https://violetics.pw/api/asupan/${pilih}?apikey=beta`)
var capt = `🐦 Koleksi Random Foto 🗿`
        conn.sendButton(m.chat, `_${usedPrefix + command + pilih}_`.trim(), capt, img.data, [['😋 lanjut 🤗', `${usedPrefix + command + pilih}`]], m)

            break
        default:
            throw er
    }
}
handler.help = ['Asupan Wallpaper']
handler.tags = ['fun']
handler.command = /^(asupan|cuss)$/i

export default handler
