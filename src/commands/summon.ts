/**
 * @fileoverview Implementation of /summon command
 *
 * This file contains the implementation of the /summon command
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */

import { CommandInteraction, SlashCommandBuilder } from "npm:discord.js@14.14";
import { Command } from "../core/command.ts";

export class SummonCommand implements Command {
  data: SlashCommandBuilder;

  constructor() {
    this.data = new SlashCommandBuilder()
      .setName("summon")
      .setDescription("⭐ Enables you to summon a character");
  }

  getData() {
    return this.data;
  }

  async execute(interaction: CommandInteraction) {
    await interaction.reply(
      "⚠️  This command is not yet implemented, please use `/play` instead",
    );
  }
}
