const { BAD_WORDS } = require('../utility/constants.json');
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('insultar')
		.setDescription('Tratar mal a alguien de manera anonima')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('Miembro a insultar🤭')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('id')
				.setDescription('id del insulto')),
	async execute(interaction) {
		const client = interaction.client;
		const target = interaction.options.getUser('target');
		const IDOffense = interaction.options.getString('id');
		const phrase = buildBadWords(IDOffense);
		client.users.send(target.id, phrase);

		await interaction.reply({ content: 'Ya trate mal a ese hpta por ti!😍🤫', ephemeral: true });
	},
};

const buildBadWords = (IDOffense) => {
	const randomNumber = Math.floor(Math.random() * 16);
	const offense = IDOffense ?? randomNumber;
	const word = BAD_WORDS[offense];
	const phrase = `Hola, alguien del server te quiere decir lo siguiente💕:\n**${word}**`;
	return phrase;
};