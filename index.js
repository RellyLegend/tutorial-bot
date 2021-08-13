// Importing modules and files.
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// We'll use config.json to configure some stuff.
const { token, prefix } = require('./config.json');

// Event emitted when bot is ready.
client.on('ready', () => {
    // Sends a message in our console/terminal when the bot is ready and logged into Discord via bot token.
    console.log(`${client.user.tag} is logged into Discord.`)
    // This will be done in the ready event.

   client.user.setActivity(`YouTube`, { type: "WATCHING"})
});

// Let's create a command.

client.on("messageCreate", message => {
    // Start with defining args!
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();

    if (!message.content.startsWith(prefix)) return // Makes sure the command starts with a prefix.

 // Our prefix is in config. Defined here.
   if (command === `ping`) {
       message.channel.send(`Ping: **${client.ws.ping}ms**`) // Returns ping as response.
   } else if (command === `say`) {
       // With the help of args, we can make a say command!
       const say = args.join(" ");
       if (!say) return message.channel.send(`Please input a text to say.`) // Makes sure there is a text for the bot to say.

       message.channel.send(say);
   } else if (command === `purge`) { 
     const amount = args[0];

     if (!parseInt(amount)) return message.channel.send(`You need to specify a number between 1 - 100!`).then(async (msg) => {
        await msg.delete()
     });

     if (!amount) return message.channel.send(`Specify an amount to purge.`) // Be right back... Sorry about that.

     message.channel.bulkDelete(amount).then(message.channel.send(`Purged **${amount}** message(s).`))
   }
});
// Note: All the code in this video will be in my GitHub.
// Login to our discord bot.
client.login(token) // token = config.token refering to our bot's token.

// Always click CTRL+S when you complete your code to save the file.
