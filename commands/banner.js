const Discord = require('discord.js');
const axios = require('axios');
exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    axios.get(`https://cryptons.ga/api/v1/userbanner?id=${user.id}`)
    .then(function(response) {
    if(response.data.url === "null") return message.channel.send(`${user.username} donest have a banner to display.`)
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Banner`, user.avatarURL)
    .setImage(response.data.url)
    .setColor('#36393F')
    message.channel.send({ embed: embed });
    return;
    })
}
module.exports.help = {
	category: 'fun',
	name: 'banner',
	description: 'gets banner',
    Infomation: `\n@banner || gets the users banner ️🔥`
};
