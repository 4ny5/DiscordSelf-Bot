const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    const pp = 
    [
    '8D \n **0 inches**',   
    '8=D \n **1 inches**', 
    '8==D \n **2 inches**', 
    '8===D \n **3 inches**', 
    '8====D \n **4 inches**', 
    '8=====D \n **5 inches**', 
    '8=======D \n **7 inches**', 
    '8=========D \n **9 inches**', 
    '8===========D \n **11 inches**', 
    '8============D \n **12 inches**', 
    '8==============D \n **14 inches**', 
    '8================D \n **16 inches**',
	];
	const embed = new Discord.RichEmbed()
    .setDescription(`**${user.username}'s penis**\n*${pp[~~(Math.random() * pp.length)]}*`)
    .setColor('#36393F')
	message.channel.send({embed});
}
module.exports.help = {
	category: 'fun',
	name: 'pp',
	description: 'checks your pp size',
    Infomation: `\n@pp || sees how big your shlong is ️🔥`
};
