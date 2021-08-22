const Discord = require('discord.js');
module.exports.run = async (client, message) => {
	let cm = message.content.split(' ').slice(1)[0];
	const prefix = '.';
	const names = [];
	const commandNames = Array.from(client.commands.keys());
	const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	if (!cm) {
	const embed = new Discord.RichEmbed()
    .addField('Comands', `${client.commands.map(c => `${prefix}*${c.help.name}*${' '.repeat(longest - c.help.name.length)} = **${c.help.description} 🔥**`).join('\n')}`)
	.setColor('#36393F')
	message.channel.send({embed});
	} else if (client.commands.has(cm)) {
		cm = client.commands.get(cm);
		let embed = new Discord.RichEmbed()
		.setTitle(`Command Info on: "${cm.help.name}"`)
		.setDescription(`\`\`\`\n${cm.help.description}${cm.help.Infomation}\`\`\``)
		.setColor('#36393F')
		message.channel.send({ embed: embed });
	}
};

module.exports.help = {
	name: 'help',
	description: 'shows list of commands',
    Infomation: `\n@help || lists heaps of commands to use ️🔥`
};