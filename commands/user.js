const { SlashCommandBuilder } = require('@discordjs/builders');
const { Guild } = require('discord.js');

const guild =

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies server information'),
	async execute(interaction) {
		await interaction.reply(`Server Name: ${Guild.name}`);
        console.log(Guild)
	},
};