const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const axios = require('axios');
exports.run = (client, message) => {
    let user = message.mentions.users.first() || message.author;
    snekfetch.get(`https://cryptons.ga/api/v1/userbanner?id=${user.id}` ).then(r => {
    var json = JSON.stringify(r.body);
    if(json.url === "null") return message.repy('User doesnt have a banner')
    axios.get(`https://cryptons.ga/api/v1/userbanner?id=${user.id}`)
    .then(function(response) {
    if(response.data.url === "null") return message.channel.send(`${user.username} doesnt have a banner to display.`)
    let embed = new Discord.RichEmbed()
    .setAuthor(`${user.username}'s Banner`, user.avatarURL)
    .setImage(response.data.url)
    .setColor('#36393F')
    message.channel.send(embed);
    });
})
}
module.exports.help = {
	category: 'fun',
	name: 'banner',
	description: 'gets banner',
    Infomation: `\n@banner || gets the users banner ️🔥`
};
