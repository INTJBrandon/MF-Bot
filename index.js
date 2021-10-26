const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });



client.once('ready', () => {
    console.log('Arete is online!');
});

client.on('interactionCreate', async Interaction => {
    if (!Interaction.isCommand()) return;

    const { commandName } = Interaction;

    if (commandName === 'ping') {
        await Interaction.reply('Pong!');
    } else if (commandName === 'beep') {
        await Interaction.reply('Boop!');
    }
});














client.login(token)