const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies server information'),
	async execute(interaction) {
		await interaction.reply(`Server Name: ${guild.name}`);
	},
};