import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { args, usedPrefix, command }) => {
    let er = `
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

contoh: ${usedPrefix + command} onichan
    `.trim()
    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
case 'anjay':
case 'ara-ara':
case 'ara-ara-cowok':
case 'ara-ara2':
case 'arigatou':
case 'assalamualaikum':
case 'asu':
case 'ayank':
case 'aku-ngakak':
case 'bacot':
case 'bahagia-aku':
case 'baka':
case 'bansos':
case 'beat-box':
case 'beat-box2':
case 'biasalah':
case 'bidadari':
case 'bot':
case 'buka-pintu':
case 'canda-anjing':
case 'cepetan':
case 'cuekin-terus':
case 'daisuki-dayo':
case 'daisuki':
case 'dengan-mu':
case 'gaboleh-gitu':
case 'gak-lucu':
case 'gamau':
case 'gay':
case 'gelay':
case 'gitar':
case 'gomenasai':
case 'hai-bot':
case 'hampa':
case 'hayo':
case 'hp-iphone':
case 'i-like-you':
case 'ih-wibu':
case 'india':
case 'karna-lo-wibu':
case 'kiss':
case 'kontol':
case 'ku-coba':
case 'maju-wibu':
case 'makasih':
case 'mastah':
case 'nande-nande':
case 'nani':
case 'ngadi-ngadi':
case 'nikah': 
case 'nuina':
case 'onichan':
case 'owner-sange':
case 'ownerku':
case 'pak-sapardi':
case 'pale':
case 'pantek':
case 'pasi-pasi':
case 'punten':
case 'sayang':
case 'siapa-sih':
case 'sudah-biasa':
case 'summertime':
case 'tanya-bapak-lu':
case 'to-the-bone':
case 'wajib':
case 'waku':
case 'woi':
case 'yamete':
case 'yowaimo':
case 'yoyowaimo':
            let text = args.slice(1).join(' ')
            let pilih = args[0].toLowerCase()
await m.reply('siap kirim...')
let sound = await conn.getFile(`https://raw.githubusercontent.com/saipulanuar/Api-Github/main/audio/${pilih}.mp3`)
		let caption = `*Sound Effect*\n\nFormat : ${pilih}`
                conn.sendFile(m.chat, sound.data, `SFX.${pilih}.mp3`, caption, m)

            break
        default:
            throw er
    }
}



handler.help = ['sfx']
handler.tags = ['downloader']
handler.command = /^(sfx)$/i

export default handler
