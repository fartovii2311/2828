import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.botNumberCode = ''
global.confirmCode = ''

global.owner = [
  ['51968382008', 'DARK CORE', true],
  ['51917154203', 'Lynx - Ai', true],
  ['','WillZek ', true],
  [''],
  ['']

]

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.prems = []
global.sessions = 'session'
global.jadi = 'LynxJadiBot'
   
//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '【 ✫ 𝚃𝙴𝙰𝙼  乂 𝙳𝙰𝚁𝙺 - 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 ✫ 】- DarkCore'
global.author = '【 ✫ 𝚃𝙴𝙰𝙼  乂 𝙳𝙰𝚁𝙺 - 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 ✫ 】' //rcanal 
global.namebot = 'Lynx - Ai'
global.wait = '*Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ ฅ^•ﻌ•^ฅ*'
global.wm = ''
global.stickpack = ``
global.packsticker = ``
global.titulowm = ''
global.titulowm2 = ''
global.igfg = ''
global.botname = '۟'
global.dev = ''
global.titu = ''
global.textbot = '【 ✫ 𝚃𝙴𝙰𝙼  乂 𝙳𝙰𝚁𝙺 - 𝙾𝙵𝙸𝙲𝙸𝙰𝙻 ✫ 】'
global.listo = '*Aqui tiene ฅ^•ﻌ•^ฅ*'
global.vs = '2.0.0'
global.namechannel = ''
global.stickauth = ``
global.dis = ':⁖֟⊱┈֟፝❥'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./storage/img/catalogo.png')
global.miniurl = fs.readFileSync('./storage/img/miniurl.jpg')
global.icons = fs.readFileSync('./storage/img/miniurl.jpg')

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.group = ''
global.group2 = ''
global.canal = 'https://whatsapp.com/channel/0029Vaxb5xr7z4koGtOAAc1Q'
global.github = '' 
global.instagram = '' 
global.redes = '' 
global.whatsApp = ''


global.rcanal = {
  contextInfo: {
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
       newsletterJid: "120363371366801178@newsletter",
       serverMessageId: 100,
       newsletterName: author,
    },
  },
 }
 
 global.fake = {
  contextInfo: {
          isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363371366801178@newsletter",
    serverMessageId: 100,
    newsletterName: author,
  },
  },
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "51968382008-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '⚘ DARK CORE VIP✨', orderTitle: 'packname', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

global.fakegif2 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "51968382008-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘ DARK CORE VIP✨', jpegThumbnail: catalogo }}};

global.fakegif3 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "51968382008-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘ DARK CORE VIP✨', jpegThumbnail: catalogo }}};

global.fakegif4 = { key: { participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "51968382008-1625305606@g.us" } : {}) }, message: { videoMessage: { title: '', h: `Hmm`, seconds: '99999', gifPlayback: true, caption: '⚘ DARK CORE VIP (^_^♪) 💥', jpegThumbnail: catalogo }}};

global.estilox = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "51968382008-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: '', orderTitle: 'packname', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias
global.apis = 'https://deliriussapi-oficial.vercel.app'

global.ch = {
ch1: '120363371366801178@newsletter',
ch2: '120363371366801178@newsletter',
ch3: '120363371366801178@newsletter'
}

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
