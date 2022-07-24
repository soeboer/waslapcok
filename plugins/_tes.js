import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', 'anjay lu bang, dah jago kah sok sokan ngetes gua??', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(tes)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/19cb3213-15ec-4541-abf7-7b7234910428.webp",//patrick huu
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/aa484c6f-423d-46cf-826e-8bddd5dd42e7.webp",//anime yntkts
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/893f5efa-67b2-4de9-ae35-6b7aa840ab37.webp",//windah bocil
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/44d6641f-e056-4106-9618-8b2368387417.webp",//patrick bawa minum
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/e83dc1e8-834d-4241-a99f-a7871960a01c.webp",//pak polisi pap tt
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/6e4cf6b7-a425-423b-a3b6-4daf68d43301.webp",//kucing1
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/8e850eea-76bb-443b-bf7d-64d2e604a058.webp",//kacamata
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/32d0fe33-2103-4c56-9984-03a01fab8a3c.webp",//patrick pembohong
 "https://stickerly.pstatic.net/sticker_pack/0yX6lJomw6K8Wa7ROwQKA/P82QK4/18/f86911cb-8c17-4221-882f-0670f19fe69c.webp"//spongebob FBI
]
