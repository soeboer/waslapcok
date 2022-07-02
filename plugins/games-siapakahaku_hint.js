let handler = async (m, { conn }) => {
    conn.siapakahaku = conn.siapakahaku ? conn.siapakahaku : {}
    let id = m.chat
    if (!(id in conn.siapakahaku)) throw false
    let json = conn.siapakahaku[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEO]/gi, '_')
    await m.reply('```' + clue + '```')
}
handler.command = /^who$/i

handler.limit = true

export default handler
