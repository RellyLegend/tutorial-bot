// Required Modules
const Discord = require('discord.js');
const client = new Discord.Client();

// Prefix
const prefix = "!";

// Notify when bot is ready.
client.on('ready', () => {
    console.log(`${client.user.tag} is ready.`)
})

// Create Message Event
client.on('message', message => {
    
    if (message.author.bot) return;
    if (!message.guild) return;

    // Create Ping Command

    if (message.content === prefix + `ping`) {
        message.channel.send(`:ping_pong: Pong!`)
    }
})

// Login to the bot
client.login(`ODE3MDYwNjMyMjU1MjY2ODQ2.YEEBAg.6QWckRzv9t2VmBiKy_MobTpqRf8`)
