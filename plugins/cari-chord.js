import axios from 'axios'

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'chord hanya rindu', m)
//     axios.get(`https://hadi-api.herokuapp.com/api/chord/?q=` + text)
    axios.get(`https://api.burhansyam.com/bot/chord/?q=` + text)    
    
        .then((res) => {
          let hasil = `*• Chord Lagu ${text} :*\n${res.data.posts.content}`
            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Chord Lagu Tidak Ditemukan!'))
}
handler.help = ['chord <judul lagu>']
handler.tags = ['pencarian']
handler.command = /^(chord)$/i

export default handler 
