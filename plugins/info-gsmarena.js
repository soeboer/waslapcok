import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => { 
if (!text) throw 'Brand atau Type Apa?\n *Contoh :* ${usedPrefix + command} redmi note 10s'
        let anu = await fetch(`https://yx-api.herokuapp.com/api/search/gsmarena?query=${text}`)				
				let kaslak = `* GSM ARENA *\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Ukuran* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inchi* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Batrai* : ${anu.batrai}
*Merek Batrai* : ${anu.merek_batre}
*Detail* : ${anu.detail}`			
//var kontoll = await getBuffer(anu.result.owner.profile_pic)	
				//sendButLocation(from, `${reply22}`,`© drips`, {jpegThumbnail:kontoll}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
let gimbir = `$(anu.thumb)`

        conn.sendMessage(m.chat, { image: gimbir, caption: `${kaslak}` }, { quoted: m}).catch((err) => m.reply('*Spesifikasi HP tidak ditemukan*'))
	            }

handler.help = ['garena <type HP>']
handler.tags = ['info']
handler.command = /^garena/i
export default handler
