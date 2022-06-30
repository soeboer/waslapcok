let handler = async (m, {command, conn}) => {
    if (command == 'nsfwloli') {
        m.reply('zim bot processing')
        let haha = await conn.getFile(`https://hadi-api.herokuapp.com/api/walpaperanime`)
        conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['NEXT', `/${command}`]], m)
    } 
}

handler.help = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.command = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.tags = ['downloader']
export default  handler
