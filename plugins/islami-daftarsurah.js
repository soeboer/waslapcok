import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {

        let res = await fetch('https://api.quran.sutanlab.id/surah')
        let json = await res.json()
        let list_id = json.data.map((v, i) => `${i + 1}. ${v.name.transliteration.id}`).join('\n')
        let contoh = `contoh:\n*${usedPrefix}surah An-Nisaa 1*\n*${usedPrefix}ayat An-Nisaa 1*\n*${usedPrefix}tafsir An-Nisaa 1*\n*${usedPrefix}alquran 1 1*\n\nharus sesuai yang ada pada daftar surah dibawah ini, dan 1 aja ayatnya\n\n`
        conn.reply(m.chat, contoh, m)
    
    }

handler.help = ['daftarsurah']
handler.tags = ['islami']
handler.command = /^((list|daftar)sura(t|h))$/i
export default handler
