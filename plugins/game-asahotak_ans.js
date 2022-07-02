import similarity from 'similarity'
const threshold = 0.72
// let handler = m => m
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*ao/i.test(m.quoted.text)) return !0
    this.asahotak = this.asahotak ? this.asahotak : {}
    if (!(id in this.asahotak)) return m.reply('Pertanyaan itu telah dijawab kak,Tetap semangat Y,mudah"an kk bisa Sukses dikemudian hari,membanggakan ortu🥰' )
    if (m.quoted.id == this.asahotak[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.asahotak[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.asahotak[id][2]
            global.db.data.users[m.sender].tiketcoin += 1
//             m.reply(`*Benar!*\n+${this.asahotak[id][2]} XP\n+1 TiketCoin`)
            await this.sendButton(m.chat, `*Betuool!* +${this.asahotak[id][2]} XP`, author, null, [['Asah Otak', '.asahotak']], m)            
            clearTimeout(this.asahotak[id][3])
            delete this.asahotak[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
export const exp = 0
