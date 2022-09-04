import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
let res = await axios("https://api.beetv.my.id/bot/injek/injek.json")
let json = res.data
let injek = json.injek
conn.reply(m.chat, `${injek}` .trim(), m)

// let handler = async m => m.reply(`
// 「 INJEK TSEL RUANGGURU 28GB 10RB 」
// APN : home | internet | internux | aha 
// SNI/IP : 104.18.2.2 | gw.ruangguru.com 
// INJEK : Websocket (ssh-ws,vmess)
// METODE : bolak balik host & sni
// Link Pembelian :
// https://my.telkomsel.com/app/package-details/e970d887eeddd5d3e72044cab495b9dd

// 「 INJEK TSEL GAMESMAX 30D 10GB 25RB」
// APN : home | internet | internux | aha 
// SNI : cf-vod.nimotv | 
// INJEK : Websocket (ssh-ws,vmess)
// METODE : bolak balik host & sni
// Link Pembelian :
// https://my.telkomsel.com/app/package-details/8302109366b885095fd23c566bdbe472

// 「 CONTOH INJEK METODE TERBALIK 」
// Screenshoot : 
// https://img001.prntscr.com/file/img001/yhThPcxRTneIP7HT59hRGw.png

// Video Tutor :
// belum release

// 「 INJEK TELKOMSEX EXTRA UNLI 」
// APN : home | internet | internux
// SNI : m.joox.co | m.spotify.com
// INJEK : all TCP&WS (ssh,ovpn,trojan,vmess)

// APN : aha | www.xlgprs.net | xlunlimited
// SNI : s10.tiktokcdn.com | api2-t3.musical.ly
// INJEK : all TCP&WS (ssh,ovpn,trojan,vmess)

// 「 AKUN VMESS PREMIUM 」
// vmess://eyJhZGQiOiJpZC12MnJheS5ieXBhc3MuaWQiLCJhaWQiOjAsImlkIjoiOGU4NmIxMGQtMjIzMC00NDExLTkzMTQtMzNiZDQwZDBjOTdkIiwiaG9zdCI6InMxMC50aWt0b2tjZG4uY29tIiwibmV0Ijoid3MiLCJwYXRoIjoiL2Zhc3Rzc2gvcHJlXzUzODk0MjU5OTUvc2VtYW5nYXQ0NS8iLCJwb3J0IjoiNDQzIiwicHMiOiJpZC12MnJheS5ieXBhc3MuaWQiLCJ0bHMiOiJ0bHMiLCJ0eXBlIjoibm9uZSIsInYiOiIyIn0=

// 「 AKUN TROJAN TCP PREMIUM 」
// Kreatif
// trojan://035cb5b0-f0d6-11ec-9d18-1577c1651679@id-ikd.bypass.id:443/?sni=s10.tiktokcdn.com#Kreatif

// CBTP
// trojan://215f9560-f0d6-11ec-a042-1577c1651679@id-tifa.bypass.id:443/?sni=s10.tiktokcdn.com#CBTP

// `.trim())
}
// Tambah sendiri kalo mau
handler.help = ['injek']
handler.tags = ['tools']
handler.command = /^(injek)$/i

export default handler
