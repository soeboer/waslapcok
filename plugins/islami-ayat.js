import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {

                    if (args.length == 0) return m.reply(`*_${usedPrefix}ayat <nama/nomor surah>_*\nMenampilkan tautan dari audio surah tertentu.\n` +
                        `Contoh penggunaan : ${usedPrefix}ayat al-fatihah\n\n*_${usedPrefix}ALaudio <nama/nomor surah> <ayat>_*\n` +
                        `Mengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Indonesia. Contoh penggunaan : ${usedPrefix}ALaudio al-fatihah 1\n\n` +
                        `*_${usedPrefix}ayat <nama/nomor surah> <ayat> en_*\nMengirim audio surah dan ayat tertentu beserta terjemahannya dalam bahasa Inggris. Contoh penggunaan : ${usedPrefix}ALaudio al-fatihah 1 en`)
                    let nmr = 0
                    if (isNaN(args[0])) {
                        let { data } = Surah
                        let idx = data.findIndex(function (post) {
                            if ((post.name.transliteration.id.toLowerCase() == args[0].toLowerCase()) || (post.name.transliteration.en.toLowerCase() == args[0].toLowerCase()))
                                return true
                        })
                        if (data[idx] === undefined) return m.reply(`Maaf format salah atau nama surah tidak sesuai`)
                        nmr = data[idx].number
                    } else {
                        nmr = args[0]
                    }
                    let ayat = args[1]
                    console.log(nmr)
                    if (!isNaN(nmr)) {
                        if (args.length > 2) {
                            ayat = args[1]
                        }
                        if (args.length == 2) {
                            ayat = last(args)
                        }
                        if (isNaN(ayat)) {
                            let pesan = ""
                            let resSurah = await axios('https://raw.githubusercontent.com/ArugaZ/scraper-results/main/islam/surah/' + nmr + '.json')
                                .catch(e => { return printError(e) })
                            let { name: surahName, name_translations, number_of_ayah, number_of_surah, recitations } = resSurah.data
                            pesan = pesan + "Audio Quran Surah ke-" + number_of_surah + " " + surahName + " (" + name_translations.ar + ") " + "dengan jumlah " + number_of_ayah + " ayat\n"
                            pesan = pesan + "Dilantunkan oleh " + recitations[0].name + " :\n" + recitations[0].audio_url + "\n"
                            pesan = pesan + "Dilantunkan oleh " + recitations[1].name + " :\n" + recitations[1].audio_url + "\n"
                            pesan = pesan + "Dilantunkan oleh " + recitations[2].name + " :\n" + recitations[2].audio_url + "\n"
                            m.reply(pesan)
                        } else {
                            let resSurah = await axios('https://api.quran.sutanlab.id/surah/' + nmr + "/" + ayat)
                                .catch(() => {
                                    return m.reply(`Surah atau ayat tidak ditemukan.`)
                                })
                            let { data } = resSurah.data
                            let bhs = last(args)
                            let pesan = ""
                            pesan = pesan + data.text.arab + "\n\n"
                            if (bhs == "en") {
                                pesan = pesan + data.translation.en
                            } else {
                                pesan = pesan + data.translation.id
                            }
                            pesan = pesan + "\n\n(Q.S. " + data.surah.name.transliteration.id + ":" + args[1] + ")"
                            await conn.sendFileFromUrl(from, data.audio.primary, '', '', id, { httpsAgent: httpsAgent })
                            await m.reply(pesan)
                        }
                    }
                    break
                }    
    
    
    
handler.help = ['ayat <no>')
handler.tags = ['islami']
handler.command = /^(ayat(mp3|audio)|ayta)$/i
export default handler
