import axios from 'axios'
import fs from 'fs'
import imageToBase64 from 'imageToBase64'

let handler = async(m, { conn, text }) => {
await m.reply('Searching...')
let str = `
*Hasil Pencarian Daerah :*
${text}
`.trim()

    axios.get('https://mnazria.herokuapp.com/api/maps?search=' + text)
    .then((res) => {
      imageToBase64(res.data.gambar)
        .then(
          (ress) => {
            let buf = Buffer.from(ress, 'base64')

     conn.sendFile(m.chat, buf, 'peta.jpg', str, m)
        })
    })
}
handler.help = ['peta <wilayah>']
handler.tags = ['tools']
handler.command = /^(peta|map)$/i
export default handler 
