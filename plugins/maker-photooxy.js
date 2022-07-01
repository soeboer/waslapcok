import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split ` `

let listeffect = `
*List Effect Photooxy :*
smoke
wolfmetal
underwaterocean
typography
neonlight
google
rainbowshine
camuflage
3dglowing
vintage
candy
gradientavatar
glowrainbow
stars
fur
flaming
crispchrome
kueultah
rainbowbg
metalicglow
striking3d
watermelon
underwebmatrix
multimaterial
harrypotter
8bit
kopi2
luxuryroyal
gerbang
woodblock
smoketypography
sweetcandy
silk
bevel
partyneon
greenleaves
modernmetal
lolcover
warface
pentakill
aov
battlefield
avatarlol
pokemon
lolavatarglitch
shinebannerlol
mastery7lol
dota2avatar
lol
crossfire
glowpentakill
warfacecover
coveroverwatch
lolcover2
csgo
lolpentakill
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'tulis juga... Teksnya?', m)

  await m.reply('Sedang membuat...')
//let img = await conn.getFile(`https://violetics.pw/api/asupan/${pilih}?apikey=beta`)
 let hasil = await conn.getFile(`https:/violetics.pw/api/photooxy/${effect}/?apikey=beta&text=${teks}`)
 let caption = `*PHOTOOXY*\n\nEffect : ${effect}`

    conn.sendFile(m.chat, hasil, 'po.jpg', caption, m)
}
handler.help = ['pox <effect teks>']
handler.tags = ['maker']
handler.command = /^(pox)$/i
// handler.limit = true

export default handler