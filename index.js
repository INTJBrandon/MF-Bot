const { Client, Intents, Interaction } = require('discord.js');
const { token } = require('./config.json')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });



client.once('ready', () => {
    console.log('Arete is online!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'beep') {
        await interaction.reply('Boop!')
    }
});














client.login(token)