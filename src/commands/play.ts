/**
 * @fileoverview Implementation of /play command
 *
 * This file contains the implementation of the /play command
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, CommandInteraction, SlashCommandBuilder } from "npm:discord.js@14.14";
import { Command } from "../core/command.ts";
import { getDefaultEmbed } from "../utils/mod.ts";

export class PlayCommand implements Command {
	data: SlashCommandBuilder;

	constructor() {
		this.data = new SlashCommandBuilder()
			.setName("play")
			.setDescription("Enables you to start playing Dragon Bot Z");
	}

	getData(): SlashCommandBuilder {
		return this.data;
	}

	async execute(interaction: CommandInteraction) {
		const embed = getDefaultEmbed(interaction.client);

		// Buttons
		// play button
		const playButton = new ButtonBuilder()
			.setCustomId("summonButton")
			.setLabel("Summon")
			.setStyle(ButtonStyle.Primary)
			.setEmoji("<:person:1175874048643842099>");

		// action row
		const actionRow = new ActionRowBuilder()
			.addComponents(playButton);

		await interaction.reply({embeds: [embed], components: [actionRow]});
	}
}
