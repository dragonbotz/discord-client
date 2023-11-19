import { Command } from "../core/command.ts";
import { CommandInteraction, SlashCommandBuilder } from "npm:discord.js@14.14";

export class HelloCommand implements Command {
	data: SlashCommandBuilder;

	constructor() {
		this.data = new SlashCommandBuilder()
			.setName("hello")
			.setDescription("Replies to the user by saying \"Hello!\"");
	}

	getData(): SlashCommandBuilder {
		return this.data;
	}

	async execute(interaction: CommandInteraction) {
		await interaction.reply("Hello!");
	}
};
