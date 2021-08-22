const Discord = require('discord.js');
module.exports.run = async (client, message) => {
    const prettyMilliseconds = require("pretty-ms");
    let embed = new Discord.RichEmbed()
    .addField("**• Username**", `\`\`\`\n${client.user.tag}\`\`\``, true)
    .addField("**• Bot**", `\`\`\`\n${client.user.bot}\`\`\``, true)
    .addField("**• Gender**", `\`\`\`\nFemale\`\`\``, true)
    .addField("**• Created**", `\`\`\`\n${client.user.createdAt.toDateString()}\`\`\``)
    .addField("**• UpTime**",`\`\`\`\n${prettyMilliseconds(client.uptime)}\`\`\``)
    .setAuthor(`${client.user.username}'s Info`, client.user.avatarURL)
    .setColor('#36393F')
    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
	category: 'fun',
	name: 'bot',
	description: 'infomation about the bot',
    Infomation: `\n@Bot || shows infomation about the bot ️🔥`
};