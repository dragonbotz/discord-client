/**
 * @fileoverview Command interface implementation
 *
 * This file contains the implementation of the command interface
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */

import { CommandInteraction, SlashCommandBuilder } from "npm:discord.js@14.14";

export interface Command {
	data: SlashCommandBuilder;

	getData(): SlashCommandBuilder;
	execute(interaction: CommandInteraction): Promise<void>;
}
