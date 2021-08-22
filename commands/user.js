const Discord = require('discord.js');
module.exports.run = async (client, message) => {
    let user = message.mentions.users.first() || message.author;
    let embed = new Discord.RichEmbed()
        .setAuthor(`${user.username}`, user.avatarURL)
        .setThumbnail(`${user.displayAvatarURL}`)
        .addField("Playing:", `${user.presence.game ? user.presence.game.name : 'Null'}`, true)
        .addField("Last Message: ", user.lastMessage !== null ? user.lastMessage : "Null", true)
        .addField("Bot:", `*${user.bot}*`, true)
        .addField("Created:", `${user.createdAt.toDateString()}`)
        .addField("ID", `${user.id}`, true)
        .setColor('#36393F')
    message.channel.send({ embed: embed });
    return;
}

module.exports.help = {
	category: 'fun',
	name: 'user',
	description: 'Lookup Command',
    Infomation: `\n@User || looks for infomation about that person ️🔥`
};