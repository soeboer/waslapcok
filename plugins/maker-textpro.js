import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split ` `

let listeffect = `
*List Effect TextPro :*
transformer
neon
neonlight
neondevil
wetglass
3dgold
3dengraved
watercolor
water-3d
water-effect
1917-style
3d-effect
3d-rubystone
rainbow-effect
3d-text-sub-zombie
3dgalaxy-metal
3dgolden
3dgradient
3dlove
3dluxury
3dneonlight
3dpapercut
3drainbow
3drealistic
3drosegold
3dscifi
3dsilver
3dspace
3dstone
3dtext-effect
3dunderwater
3dvintage
3dwaterpipe
alice-league-of-kings
angel-wing-galaxy
anubis
arch-crossfire
art-shader
assassins-creed
avengers
azzenka-league-of-kings
balloons-cards
balloons-love
bearlogo
bg-crossfire
birthday-cake
birthday-cards
birthday-greeting
birthday-roses
black-metal
blackpink
blood-frosted
blood-text
blue-effect
blue-glitter
brickwall
brokentext
bubble-effect
bulb-effect
circuit
cutegirl
dinamo
firework
floraltext
gemstone
glitchtext
glossy
ledtext
science
skeleton
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'tulis juga teksnya?', m)

  await m.reply('Sabar Kak saya buatkan dulu...')

 let hasil = await conn.getFile(`https://violetics.pw/api/textpro/${effect}?text=${teks}&apikey=beta`)
 let caption = `*Text Pro*\n\nEffect : ${effect}`
    conn.sendFile(m.chat, hasil.data, 'textpro.jpg', caption, m)
}


handler.help = ['textpro <effect> <teks>']
handler.tags = ['maker']
handler.command = /^textpro$/i

export default handler
