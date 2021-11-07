const { SlashCommandBuilder } = require('@discordjs/builders');
const { Interaction, Guild } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies server information'),
	async execute(interaction) {
		await interaction.reply(`Server Name: ${Interaction.guild.name}`);
	},
};