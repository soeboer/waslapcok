let handler = async (m, {command, conn}) => {
        m.reply('bot processing')
        let haha = await conn.getFile(`https://hadi-api.herokuapp.com/api/walpaperanime`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['😎 Acak 😋', `/${command}`]], m)
    } 

handler.help = ['random wallpaper anime']
handler.command = ['wallnime']
handler.tags = ['downloader']
export default  handler
