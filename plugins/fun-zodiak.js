import { Primbon } from 'scrape-primbon'

// let handler = (m, { usedPrefix, command, text }) => {
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `contoh:\n${usedPrefix + command} 06 08 2013`

    const date = new Date(text)
    if (date == 'Invalid Date') throw date
    const d = new Date()
    const [tanggal, bulan, tahun] = [d.getDate(), d.getMonth() + 1, d.getFullYear()]
    const birth = [date.getDate(), date.getMonth() + 1, date.getFullYear()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [tahun + (+ new Date(1970, bulan - 1, tanggal) > + new Date(1970, birth[1] - 1, birth[2])), ...birth.slice(1)]
    const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Selamat ulang tahun yang ke-${age} 🥳` : age

    const teks = `
Lahir : ${birth.join('-')}
Ultah : ${birthday.join('-')}
Usia : ${cekusia}
Zodiak : ${zodiac}
`.trim()
//     m.reply(teks)
    
                    const primbon = new Primbon()   
    let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                conn.reply(m.chat, `⭔${teks}\n⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
handler.help = ['zodiak <06 08 2013>']
handler.tags = ['fun']

handler.command = /^zodia[kc]$/i

export default handler 

const zodiak = [
    ["Capricorn", new Date(1970, 0, 1)],
    ["Aquarius", new Date(1970, 0, 20)],
    ["Pisces", new Date(1970, 1, 19)],
    ["Aries", new Date(1970, 2, 21)],
    ["Taurus", new Date(1970, 3, 21)],
    ["Gemini", new Date(1970, 4, 21)],
    ["Cancer", new Date(1970, 5, 22)],
    ["Leo", new Date(1970, 6, 23)],
    ["Virgo", new Date(1970, 7, 23)],
    ["Libra", new Date(1970, 8, 23)],
    ["Scorpio", new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn", new Date(1970, 11, 22)]
].reverse()


                

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
}
