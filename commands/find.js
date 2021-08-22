const Discord = require('discord.js');
const snekfetch = require('snekfetch');
exports.run = (client, message) => {
    let user = message.mentions.users.first() || message.author;
    snekfetch.get(`https://verify.eryn.io/api/user/${user.id}` ).then(r => {
        var string = JSON.stringify(r.body);
        let embed = new Discord.RichEmbed()
        .setTitle(`Roblox ID: ${r.body.robloxId}`)
        .setDescription(`[Go to profile](https://www.roblox.com/users/${r.body.robloxId}/profile)`)
        .setImage(`https://www.roblox.com/Avatar-thumbnail/image?userId=${r.body.robloxId}&width=420&height=420&format=png`)
        .setAuthor(`${user.username}'s Account`, user.avatarURL)
        .setColor('#36393F')
        message.channel.send({ embed: embed });
        return;
    }).catch(function(err) {
        let embed = new Discord.RichEmbed()
        .setTitle("❌ This User isn't attached ❌")
        message.channel.send({embed})
    })
}
module.exports.help = {
    category: 'fun',
    name: 'find',
    description: 'finds attached roblox accounts',
    Infomation: `\n@find || searches for attached accounts via rover api ️🔥`
};