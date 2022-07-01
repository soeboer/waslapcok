import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

let listeffect = `
*List Sound :*
anjay
ara-ara
ara-ara-cowok
ara-ara2
arigatou
assalamualaikum
asu
ayank
aku-ngakak
bacot
bahagia-aku
baka
bansos
beat-box
beat-box2
biasalah
bidadari
bot
buka-pintu
canda-anjing
cepetan
cuekin-terus
daisuki-dayo
daisuki
dengan-mu
gaboleh-gitu
gak-lucu
gamau
gay
gelay
gitar
gomenasai
hai-bot
hampa
hayo
hp-iphone
i-like-you
ih-wibu
india
karna-lo-wibu
kiss
kontol
ku-coba
maju-wibu
makasih
mastah
nande-nande
nani
ngadi-ngadi
nikah nuina
onichan
owner-sange
ownerku
pak-sapardi
pale
pantek
pasi-pasi
punten
sayang
siapa-sih
sudah-biasa
summertime
tanya-bapak-lu
to-the-bone
wajib
waku
woi
yamete
yowaimo
yoyowaimo
`.trim()

    if (!effect) return conn.reply(m.chat, listeffect, m)

  await m.reply('tunggu dulu 🐦')
//let img = await conn.getFile(`https://violetics.pw/api/asupan/${pilih}?apikey=beta`)
  
 let audio = await conn.getFile(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/${listeffect}.mp3`)
 let caption = `*SFX*\n\nEffect : ${listeffect}`

// await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true) 
 
    conn.sendFile(m.chat, audio, 'error.mp3', caption, m)
}
handler.help = ['sfx']
handler.tags = ['downloader']
handler.command = /^(sfx)$/i

export default handler
