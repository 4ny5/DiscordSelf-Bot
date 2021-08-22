const Discord = require('discord.js');
exports.run = (client, message, args) => {
    const arg = message.content.split(' ').slice(1).join(' ');
    const Words = [
    'Yes',   
    'No', 
    'maybe',
    'ask again later',
    'Cannot be certain',
	];
	const embed = new Discord.RichEmbed()
    .setDescription(`**Your Message:** *${arg}*
    Answer: ${Words[~~(Math.random() * Words.length)]}`)
    .setColor('#36393F')
	message.channel.send({embed});
}
module.exports.help = {
	category: 'fun',
	name: '8ball',
	description: 'ask the 8ball anything',
    Infomation: `\n@8ball || answers your message ️🔥`
};
