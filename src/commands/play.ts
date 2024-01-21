/**
 * @fileoverview Implementation of /play command
 *
 * This file contains the implementation of the /play command
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { CommandInteraction, SlashCommandBuilder } from "npm:discord.js@14.14";
import { Command } from "../core/command.ts";
import { getPlayMessage } from "../utils/commands/play.ts";
import { Summon } from "../core/commands/summon.ts";

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
    const message = getPlayMessage(interaction.client);
    const reply = await interaction.reply(message);

    // check which button has been clicked
    let clicked = await reply.awaitMessageComponent({
      filter: (u) => u.user.id === interaction.user.id,
    });

    if (clicked.customId == "summonButton") {
      const summonCommand = new Summon();
      await summonCommand.executeCommand(
        clicked,
      );
    }
  }
}
