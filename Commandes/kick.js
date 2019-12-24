const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`vous n'avez pas la permission pour expulser cette personne !`);
    let target = message.mentions.users.first();
    if(!target) {
        return message.channel.send(`vous devez mentionnez un utilisateur !`);
    }

    let kick = message.guild.member(target.id);

    if(!kick){
        return message.channel.send(`Je n'ai pas trouvé l'utilisateur !`);
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`le bot n'a pas la permission !`);

    kick.kick().then(member => {
        message.channel.send(`${member.user.username} a été kick du serveur ! par ${message.author.username}`);
        target.send(`vous aver été expulser du serveur **${message.guild.name}** par le modérateur${message.author.username}`).catch(console.error);
    });
};

module.exports.help = {
    name: "kick"
};