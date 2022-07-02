import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split ` `

let listeffect = `
*List Effect Photooxy :*
3dglowing
3dnature
3dwoodenblack
8bit
bevel
birthdaycake
burnpaper
butterfly
camuflage
candy
coffee
coffee-heartcup
crispchrome
embroiderytext
flaming
flowertext
flowertypo
funnycup
fur
gerbang
glowrainbow
gradientavatar
graffititext
grenleaves
harrypotter
illuminated-metallic
lovemessage
luxuryroyal
metalicglow
modernmetal
multimaterial
nature3d
neonlight
orchids-flower
partyneon
quotesgrass
rainbowbg
rainbowshine
romantic-doubleheart
stars
striking3d
summertext
romance
woodblock
smoketypography
sweetcandy
silk
smoketype-effect
smoketypography
bevel
partyneon
greenleaves
tiktokmaker
typography
underquotes
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'tulis juga... Teksnya?', m)

  await m.reply('Sabar Kak saya buatkan dulu...')
//  let hasil = await fetch('https://violetics.pw/api/photooxy/' + effect + '?text=' + teks + `&apikey=beta`)
 let hasil = await conn.getFile(`https://violetics.pw/api/photooxy/${effect}?text=${teks}&apikey=beta`)
 let caption = `*PHOTOOXY*\n\nEffect : ${effect}`
    conn.sendFile(m.chat, hasil.data, 'photooxy.jpg', caption, m)
}

handler.help = ['pox <effect teks>']
handler.tags = ['maker']
handler.command = /^(pox)$/i

export default handler
