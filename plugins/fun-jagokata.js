import axios from 'axios'

// let handler = async (m, { conn, text, args, usedPrefix, command }) => {
// if (!text) throw `Contoh : ${usedPrefix + command} makan`

//                 let res = await axios("https://violetics.pw/api/information/jagokata?apikey=beta&nama=${text}")
//                 let json = res.data
//                 let senja = json.senja
               

//                 if (anu.status == false) return m.reply(anu.message)
//                 conn.reply(m.chat, `⭔ *Quotes :* ${anu.message.quote}\n⭔ *Penulis :* ${anu.message.author}\n⭔ *Biografi :* ${anu.message.bio}`, m)
// }

let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return conn.reply(m.chat, 'Contoh penggunaan: ' + usedPrefix + 'rindu', m)
    axios.get(`https://violetics.pw/api/information/jagokata?apikey=beta&nama=` + text)
        .then((res) => {
          let gbr = `${res.data.result.img}`
          let bio = `${res.data.result.bio}`
          let au = `${res.data.result.author}`
          let hasil = `*⭔ Quotes Kata ${text} :*\n*${res.data.results.quote}\n⭔ *Penulis :* ${au}\n⭔ *Biografi :* ${bio} *`
//           `⭔ *Quotes :* ${res.data.quote}\n⭔ *Penulis :* ${anu.message.author}\n⭔ *Biografi :* ${anu.message.bio}`
            conn.reply(m.chat, hasil, m)
        })
        .catch(_ => m.reply('Quote Tidak Ditemukan!'))
}



handler.help = ['jagokata'].map(v => v + ' [name]')
handler.tags = ['fun']
handler.command = ['jagokata']

export default handler
