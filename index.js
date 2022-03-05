const Discord = require('discord.js');
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES] });
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);


client.on('messageCreate', async message => {
    if (message.content === 'youtube') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });
          
        };
    };
    if (message.content === 'poker') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });
          
        };
    };
    if (message.content === 'chess') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });     
        };
    };
    if (message.content === 'checkers') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'checkers').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });
          
        };
    };
    if (message.content === 'betrayal') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });         
        };
    };
    if (message.content === 'fishing') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'lettertile') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'lettertile').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'wordsnack') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'wordsnack').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'spellcast') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'spellcast').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'awkword') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'awkword').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'puttparty') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'puttparty').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'sketchheads') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'sketchheads').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'ocho') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'ocho').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
    if (message.content === 'doodlecrew') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'doodlecrew').then(async invite => {
    return message.channel.send(`${invite.code}`);
            });      
        };
    };
});

client.login('Bot Token');
