const Discord = require('discord.js');
exports.run = (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    const HugGifs = 
    [
        "https://media0.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif?cid=ecf05e47a04f6d3c6d7f959b6b190b1cda88ce59d34605ac&rid=giphy.gif",
        "https://media2.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif?cid=ecf05e477106e2fc0d1ed0906595b65067262ab482a12b5d&rid=giphy.gif",
        "https://media3.giphy.com/media/u9BxQbM5bxvwY/giphy.gif?cid=ecf05e4761cb7e6abcb1ce7cd71e633f635d55fb953813bb&rid=giphy.gif",
        "https://media1.giphy.com/media/ZQN9jsRWp1M76/giphy.gif?cid=ecf05e476aa1056a2b1672677a82b9415bb06e0a8925f15a&rid=giphy.gif",
        "https://media2.giphy.com/media/IRUb7GTCaPU8E/giphy.gif?cid=ecf05e4791de990a3943c06a4dd525151df03fc7667807a5&rid=giphy.gif",
        "https://media0.giphy.com/media/BXrwTdoho6hkQ/giphy.gif?cid=ecf05e4783c7a876015ea9dd1be3b1cfeb7d9af9183e1f97&rid=giphy.gif",
        "https://media.giphy.com/media/QFPoctlgZ5s0E/giphy.gif?cid=790b7611a9d3a16f7789be5496f9ffee95de96cb2d072b0d&rid=giphy.gif",
        "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif?cid=790b761197d05810950a196f8cd539b559be9625a8781663&rid=giphy.gif",
        "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif?cid=790b76110461571ec65255974ed5dab737d9c626522edaa2&rid=giphy.gif",
        "https://media.giphy.com/media/kz01wlAoCLYx3v8F68/giphy.gif?cid=790b76118f57ff9d510389bab60bd015be70129a7b237ba3&rid=giphy.gif",

	];
    const image = Math.floor(Math.random() * HugGifs.length);
    const embed = new Discord.RichEmbed()
    .setTitle(`${message.author.username} hugs ${user.username}`)
    .setImage(String([HugGifs[image]]))
    .setColor('#36393F')
    message.channel.send({embed});
}
module.exports.help = {
	category: 'fun',
	name: 'hug',
	description: 'hug a person',
    Infomation: `\n@hug || use the command to hug a person you want ️🔥`
};
