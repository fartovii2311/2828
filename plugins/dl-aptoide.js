// [ ❀ APK DL ]
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) {
    return m.reply("❀ Ingresa el nombre de la app que quieres buscar");
  }

  await m.react('🕓');  // Reacción de carga

  try {
    let api = await fetch(`https://api.giftedtech.my.id/api/download/apkdl?apikey=gifted&appName=${text}`);
    let json = await api.json();
    let { appname, appicon, developer, download_url, mimetype } = json.result;
    let txt = `- Nombre: ${appname}
- Creador: ${developer}`;

    await conn.sendFile(m.chat, appicon, 'HasumiBotFreeCodes.jpg', txt, m);
    await conn.sendMessage(m.chat, { 
      document: { url: download_url }, 
      mimetype: mimetype, 
      fileName: `${appname}.apk`, 
      caption: null 
    }, { quoted: m });

    await m.react('✅');  // Reacción de éxito
  } catch (error) {
    console.error('Error al obtener el APK:', error);
    m.reply('❀ Ocurrió un error al intentar obtener el APK. Intenta nuevamente.');
    await m.react('❌');  // Reacción de error
  }
};

handler.command = /^(apk)$/i;
handler.tags = ['dl'];

export default handler;
