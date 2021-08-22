const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	const arg = message.content.split(' ').slice(1).join(' ');
	client.user.setActivity(`${arg}`, {
		type: "STREAMING",
		url: `https://www.twitch.tv/Discord`
    })
	const embed = new Discord.RichEmbed()
	.setColor('#36393F')
	.setDescription(`*Made **"${arg}"** my status*`);
	message.channel.send({embed});
};

module.exports.help = {
	category: 'fun',
	name: 'gst',
	description: 'Make the bots status to what ever',
    Infomation: `\n@gst || sets bots status to your choice ️🔥`
};