import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
let [effect, teks] = text.split ` `

let listeffect = `
*List Effect Ephoto360 :*
bee
joker
horse
jaguar
juventus
1917
bear
bear2
dragon
3dgradient
neon-valentine
glitter-gold
firework-effect
firework-effect23d-underwater
3d-wood
3damerican-flag
3dglue-realistic
3dgradient
3dgradient2
3dmetal-effect
3dmetal-text-
3druby-stone
3dsand-engraved
3dshiny-metallic
3dsparkle-christmas
3dsub-zombie
3dtext-effect
3dtext-effect2
3dtext-effect3
3dtext-pig
3dvalentine-cards
3dxmas-cards	
3dxmas-cards2
83day-card
83day-card2
83day-card3
83day-card4
advanced-glow
angels-wings
anonymous-neon
art-shader
balloon-noel
cloud-sky
candy-text
cake-text
cake-text2
cake-text3
bokeh-text
blood-text
blood-text2
blackpink
birthday-cards
birthday-cake
birthday-cake2
birthday-cake3
birthday-cake4
birthday-cake5
birthday-cake6
birthday-cake7
birthday-cake8
birthday-cake9
birthday-cake10
football-club2
glowing-effect
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)
    if (!teks) return conn.reply(m.chat, 'tulis juga... Teksnya?', m)

  await m.reply('Sabar Kak saya buatkan dulu...')
 let hasil = await conn.getFile(`https://violetics.pw/api/photooxy/${effect}?text=${teks}&apikey=beta`)
 let caption = `*Ephoto360*\n\nEffect : ${effect}`
    conn.sendFile(m.chat, hasil.data, 'ephoto360.jpg', caption, m)
}

handler.help = ['e360 <effect teks>']
handler.tags = ['maker']
handler.command = /^(e360)$/i

export default handler
