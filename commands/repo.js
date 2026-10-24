module.exports = async (sock, m, args) => {
    const repoText = `╭━━━〔 🤖 *MISTER-MD REPOSITORY* 〕━━━⬣
┃ 🤖 *Bot Name:* MISTER-MD
┃ 👑 *Owner:* MisterDev
┃ 📦 *GitHub:* https://github.com/pyramjefferson/MISTER-MD1
╰━━━━━━━━━━━━━━━━━━━━⬣`;

    const channelInfo = {
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363407561123100@newsletter',
                newsletterName: 'MISTER-MD',
                serverMessageId: -1
            }
        }
    };

    await sock.sendMessage(m.key.remoteJid, {
        image: { url: "https://files.catbox.moe/jk9nuf.png" },
        caption: repoText,
        ...channelInfo
    }, { quoted: m });
};
