// function handler(m) {
//   let data = global.owner.filter(([id, isCreator]) => id && isCreator)
//   this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
// }

import PhoneNumber from 'awesome-phonenumber'

async function handler(m) {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + 'VERSION:3.0\n' 
                    + 'N:; @burhansyam;;;'
                    + 'FN: Burhan Syam\n' // full name
                    + 'ORG:AgenDosa;\n' // the organization of the contact
                    + 'TEL;type=CELL;type=VOICE;waid=6281808032100:+62 818-0803-2100\n' // WhatsApp ID + phone number
                    + 'END:VCARD'
                conn.sendMessage(m.chat, { contacts: { displayName: 'burhansyam', contacts: [{ vcard }] } }, { quoted: m })
}



handler.alias = ['owner']
handler.command = /^(owner)$/i

export default handler
