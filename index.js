// Importing modules and files.
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// We'll use config.json to configure some stuff.
// We'll define prefix, but use it on the next video.
const { token, prefix } = require('./config.json');

// Event emitted when bot is ready.
client.on('ready', () => {
    // Sends a message in our console/terminal when the bot is ready and logged into Discord via bot token.
    console.log(`${client.user.tag} is logged into Discord.`)
});

// Let's create a command.

client.on('messageCreate', message => {
    if (message.content === `ping`) {
        message.channel.send(`Pong!`)
    }
});

// Login to our discord bot.
client.login(token) // token = config.token refering to our bot's token.

// Always click CTRL+S when you complete your code to save the file.
