/* 
- play hecho por By DarkCore
- https://whatsapp.com/channel/0029Vaxk8vvEFeXdzPKY8f3F
- Parchado por DarkCore... vip plus
*/

import fetch from 'node-fetch'
import yts from 'yt-search'

let handler = async (m, { conn: star, command, args, text, usedPrefix }) => {
  if (!text) {
    return conn.reply(m.chat, '[ ᰔᩚ ] Ingresa el título de un video o canción de *YouTube*.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* Mc Davo - Debes De Saber`, m)
  }

  await m.react('🕓')

  try {
    let res = await search(args.join(" "))

    let txt = `🎬 *‌乂 Y O U T U B E  -  P L A Y 乂* 🎬\n\n`
    txt += `－－－－－－－－－－－－－－－－－－\n`
    txt += `ﾒ *TITULO:* ${res[0].title}\n`
    txt += `ﾒ *DURACION:* ${secondString(res[0].duration.seconds)}\n`
    txt += `ﾒ *PUBLICACION:* ${eYear(res[0].ago)}\n`
    txt += `ﾒ *CANAL:* ${res[0].author.name || 'Desconocido'}\n`
    txt += `ﾒ *ID:* ${res[0].videoId}\n`
    txt += `ﾒ *URL:* https://youtu.be/${res[0].videoId}\n`
    txt += `－－－－－－－－－－－－－－－－－－\n\n`
    txt += `> ↻ Responde con *Video* O *Audio* para elegir tu formato.`

    const thumbnailUrl = res[0].image; 
    const videoUrl = `https://youtu.be/${res[0].videoId}`; 
    
    const contextInfo = { 
      isForwarded: true, 
      forwardedNewsletterMessageInfo: { 
        newsletterJid: "120363374486687514@newsletter", 
        serverMessageId: 100, 
        newsletterName: 'Lyᥒ᥊ ᥴһᥲᥒᥒᥱᥣ', 
      }, 
      externalAdReply: { 
        showAdAttribution: true, 
        title: res[0].title,  // Usar el título del video
        body: '( ´͈ ᵕ `͈ )◞♡ Sɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ', 
        mediaUrl: null, 
        description: null, 
        previewType: "", 
        thumbnailUrl: thumbnailUrl,  // Usar la miniatura del video
        sourceUrl: videoUrl,  // Usar la URL del video de YouTube
        mediaType: 1, 
        renderLargerThumbnail: true 
      }, 
    };

    // Enviar solo la miniatura con el texto y el contextInfo
    await star.sendMessage(m.chat, {
      text: txt,
      contextInfo,
    })

    await m.react('✅')
  } catch (err) {
    console.error(err)
    await m.react('✖️')
    return conn.reply(m.chat, '❌ Ocurrió un error al realizar la búsqueda. Intenta nuevamente.', m)
  }
}

handler.help = ['play *<búsqueda>*']
handler.tags = ['dl']
handler.command = ['play', 'Play', 'PLAY', 'pl']
handler.register = true 

export default handler

async function search(query, options = {}) {
  let searchResults = await yts.search({ query, hl: "es", gl: "ES", ...options })
  return searchResults.videos.filter(video => video.seconds > 0).slice(0, 5)
}

function secondString(seconds) {
  seconds = Number(seconds)
  const d = Math.floor(seconds / (3600 * 24))
  const h = Math.floor((seconds % (3600 * 24)) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = Math.floor(seconds % 60)
  const dDisplay = d > 0 ? d + (d == 1 ? ' Día, ' : ' Días, ') : ''
  const hDisplay = h > 0 ? h + (h == 1 ? ' Hora, ' : ' Horas, ') : ''
  const mDisplay = m > 0 ? m + (m == 1 ? ' Minuto, ' : ' Minutos, ') : ''
  const sDisplay = s > 0 ? s + (s == 1 ? ' Segundo' : ' Segundos') : ''
  return dDisplay + hDisplay + mDisplay + sDisplay
}

function eYear(txt) {
  if (!txt) return '×'
  if (txt.includes('month ago')) {
    var T = txt.replace("month ago", "").trim()
    return 'hace ' + T + ' mes'
  }
  if (txt.includes('months ago')) {
    var T = txt.replace("months ago", "").trim()
    return 'hace ' + T + ' meses'
  }
  if (txt.includes('year ago')) {
    var T = txt.replace("year ago", "").trim()
    return 'hace ' + T + ' año'
  }
  if (txt.includes('years ago')) {
    var T = txt.replace("years ago", "").trim()
    return 'hace ' + T + ' años'
  }
  if (txt.includes('hour ago')) {
    var T = txt.replace("hour ago", "").trim()
    return 'hace ' + T + ' hora'
  }
  if (txt.includes('hours ago')) {
    var T = txt.replace("hours ago", "").trim()
    return 'hace ' + T + ' horas'
  }
  if (txt.includes('minute ago')) {
    var T = txt.replace("minute ago", "").trim()
    return 'hace ' + T + ' minuto'
  }
  if (txt.includes('minutes ago')) {
    var T = txt.replace("minutes ago", "").trim()
    return 'hace ' + T + ' minutos'
  }
  if (txt.includes('day ago')) {
    var T = txt.replace("day ago", "").trim()
    return 'hace ' + T + ' dia'
  }
  if (txt.includes('days ago')) {
    var T = txt.replace("days ago", "").trim()
    return 'hace ' + T + ' dias'
  }
  return txt
}
