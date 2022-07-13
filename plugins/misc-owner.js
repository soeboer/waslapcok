// function handler(m) {
//   let data = global.owner.filter(([id, isCreator]) => id && isCreator)
//   this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
// }

import PhoneNumber from 'awesome-phonenumber'

async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:Syam;Burhan;;;\n'
                    + 'FN:Burhan Syam\n' // full name
                    + 'ORG:Agen Dosa .Inc;\n' // the organization of the contact
                    + 'PHOTO;TYPE=JPEG;VALUE=URI:https://yt3.ggpht.com/ytc/AKedOLQULZ1m7pFS3RU_C9BtC9dPzw46p1Y9g6NxzsH0=s900-c-k-c0x00ffffff-no-rj\n'
                    + 'TEL;type=CELL;type=VOICE;waid=6281808032100:+62 818-0803-2100\n' // WhatsApp ID + phone number
                    + 'item1.TEL;\n'
                    + 'item1.X-ABLabel:Burhan\n'
                    + 'item2.EMAIL;type=INTERNET:me@burhansyam.com\n'
                    + 'item2.X-ABLabel:Email\n'
                    + 'item3.URL:https://www.burhansyam.com/\n'
                    + 'item3.X-ABLabel:Web\n'
                    + 'item4.ADR:;;Indonesia;;;;\n'
                    + 'item4.X-ABLabel:Region\n'                
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'burhansyam', contacts: [{ vcard }] } }, { quoted: m })
}



handler.alias = ['owner']
handler.command = /^(owner)$/i

export default handler
