const Discord = require('discord.js');
const got = require('got');
exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    got('https://www.reddit.com/r/memes/random/.json')
    .then(response => {
        const [list] = JSON.parse(response.body);
        const [post] = list.data.children;
        const permalink = post.data.permalink;
        const memeUrl = `https://reddit.com${permalink}`;
        const memeImage = post.data.url;
        const memeTitle = post.data.title;
        const memeUpvotes = post.data.ups;

        embed.setTitle(`${memeTitle}`);
        embed.setURL(`${memeUrl}`);
        embed.setColor('#36393F')
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} - Upvotes`);

        message.channel.send(embed);
    })
    .catch(console.error);
}
module.exports.help = {
	category: 'fun',
	name: 'meme',
	description: 'random meme',
    Infomation: `\n@meme || generates a random meme ️🔥`
};
