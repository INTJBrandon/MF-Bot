const { SlashCommandBuilder } = require('@discordjs/builders');
const { guildId } = require('./config.json');

const guild = client.guilds.cache.get(guildId)

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies server information'),
	async execute(interaction) {
		await interaction.reply(`Server Name: ${guild.name}`);
        console.log(Guild)
	},
};