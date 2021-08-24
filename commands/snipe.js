const Discord = require('discord.js');
const db = require('quick.db');
module.exports.run = async (client, message) => {
    client.on('messageDelete', async (message) => {
        db.set(`snipemsg_${message.channel.id}`, message.content)
        db.set(`snipesender_${message.channel.id}`, message.author.id)
    })
    let msg = db.get(`snipemsg_${message.channel.id}`)
    if(!msg) {
        return message.channel.send(`Theres nothing to snipe`)
    }
    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .setDescription(`Sniped! **${msg}**`)
    .setColor('#36393F')
    message.channel.send({ embed: embed });
    return;
}
module.exports.help = {
	category: 'fun',
	name: 'snipe',
	description: 'Snipes deleted messages',
    Infomation: `\n@snipe || Use this when a user has deleted messages🔥`
};
