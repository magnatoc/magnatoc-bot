const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    const debut = Date.now(); 
    await message.channel.send("ping").then(async(m) => await m.edit(`Pong : ${Date.now() - debut} ms`));

};
module.exports.help = {
    name: "ping"
};