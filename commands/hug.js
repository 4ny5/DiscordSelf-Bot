const Discord = require('discord.js');
const axios = require('axios');
exports.run = (client, message) => {
    let user = message.mentions.users.first() || message.author;
    axios.get(`https://nekos.life/api/hug`)
    .then(function(response) {
    if(response.data.url === "null") return message.channel.send(`⚠️Error⚠️`)
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} hugs ${user.username}`)
    .setImage(response.data.url)
    .setColor('#36393F')
    message.channel.send({embed});
    })
}
module.exports.help = {
	category: 'fun',
	name: 'hug',
	description: 'Hug a user',
    Infomation: `\n@hug || use the command to hug a person you want ️🔥`
};
