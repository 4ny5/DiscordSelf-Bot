const Discord = require('discord.js');
const snekfetch = require('snekfetch');
module.exports.run = async (client, message) => {
    const arg = message.content.split(' ').slice(1).join(' ');
    snekfetch.get(`http://ip-api.com/json/${arg}` ).then(r => {
    var string = JSON.stringify(r.body);
    let embed = new Discord.RichEmbed()
    .setDescription(`**__ IP Lookup Information__**
**Looked Up**: ${arg}
**Latitude**: ${r.body.lat}
**longitude**: ${r.body.lon}
**State**: ${r.body.regionName}
**City**: ${r.body.city}
**CountryCode**: ${r.body.countryCode}
**ZipCode**: ${r.body.zip}`)
.setColor('#36393F')
    message.channel.send({ embed: embed });
    return;
  })
}
module.exports.help = {
	category: 'fun',
	name: 'ip',
	description: 'searches infomation about the ip',
  Infomation: `\n@ip || looks up ip infomation via api ️🔥`
};