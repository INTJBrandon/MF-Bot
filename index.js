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
    } else if (commandName === 'server') {
        await Interaction.reply(`Server name: ${Interaction.guild.name}\nTotal members: ${Interaction.guild.memberCount}\nCreated at: ${Interaction.guild.createdAt}`);
    } else if (commandName === 'user') {
        await Interaction.reply(`Your tag: ${Interaction.user.tag}\nYour id: ${Interaction.user.id}`);
    }
});














client.login(token)