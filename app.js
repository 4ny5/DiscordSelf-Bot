const Discord = require('discord.js'),
	moment = require('moment');
client = new Discord.Client(),
      token = require('./private.json'),
      fs = require('fs'),
      winstonLogger = require('./classes/logger.js');
winston = require('winston'),
      chalk = require('chalk');
const winstonClass = new winstonLogger();
global.logger = winstonClass.logger;

client.login(token.token);
client.on('ready', async () => {
	const Activity = `logged in as root`
	const StreamActivity = `https://www.twitch.tv/Discord`
	logger.verbose(`${client.user.username} is Online`);
	logger.verbose(`ID: ${client.user.id}`);
	logger.verbose(`User Activity: ${Activity}`);
	logger.verbose(`Prefix is ${prefix}`)
	await client.user.setActivity(`${Activity}`, {
		type: "STREAMING",
		url: `${StreamActivity}`
    })
})
client.commands = new Discord.Collection();
fs.readdir('./commands', (err, files) => {
	if (err) {
		logger.error(err);
	}
	const jsFiles = files.filter(f => f.split('.').pop() === 'js');
	if (jsFiles.length <= 0) {
		logger.info('No commands to load');
		return;
	}
	logger.info(`Loading ${jsFiles.length} commands`);

	try {
		jsFiles.forEach((f, i) => {
			const props = require(`./commands/${f}`);
			logger.info(`${i + 1}) ${f} Has been loaded successfully`);
			client.commands.set(props.help.name, props);
		});
	} catch (e) {
		logger.error(e);
	}
});
const prefix = '.';
client.on('message', async message => {
	if (message.author.bot) {
		return;
	}
	const guild = message.guild;
	const args = message.content.split(' ').slice(1).join(' ');
	const command = message.content.split(' ')[0];
	if (!command.startsWith(prefix)) {
		return;
	}
	const cmd = client.commands.get(command.slice(prefix.length));
	if (cmd) {
		try {
			cmd.run(client, message, args);
			logger.info(`${chalk.yellow(cmd.help.name)} was executed by ${chalk.magenta(message.author.username)} inside ${message.guild ? message.guild.name : '"Null"'}`);
		} catch (e) {
			logger.error(e);
		}
	}
});
