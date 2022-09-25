let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
┌─「 Donasi • Pulsa 」
│ • *Indosat:* [${085838571639}]
❏────

┌─「 Donasi • Non Pulsa 」
│ • *Dana:* [${085896661014}]
│ • *Gopay:* [${085838571639}]
│ • *Ovo:* [${08XXXXXXXXXX}]
│ • *Link Aja:* [${08XXXXXXXXXX}]
❏────
`.trim()
  m.reply(text)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
