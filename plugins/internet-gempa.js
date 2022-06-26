import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://st4rz.herokuapp.com/api/infogempa")
let json = res.data
let url = json.url
conn.sendButton(m.chat, "*INFO GEMPA*\n\nLokasi : ${res.lokasi}\nKedalaman : ${res.kedalaman}\nKoordinat : ${res.koordinat}\nMagnitude : ${res.magnitude}\nPotensi : ${res.potensi}\nWaktu : ${res.waktu}", author, url, m)}

handler.help = ['infobmkg','infogempa']
handler.tags = ['internet']
handler.command = /^(infobmkg|infogempa)$/i
export default handler
