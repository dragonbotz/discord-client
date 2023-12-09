/**
 * @fileoverview Play command utilities
 *
 * This file contains the implementations of the play command utilities
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  Client,
} from "npm:discord.js@14.14";
import { getDefaultEmbed } from "../mod.ts";

/**
 * Returns the play command message
 *
 * @param {Client} client - The Discord client
 * @returns {embeds: EmbedBuilder[], components: ActionRowBuilder[]} - The play command message
 */
export function getPlayMessage(client: Client) {
  const embed = getDefaultEmbed(client);

  // Buttons
  // summon button
  const playButton = new ButtonBuilder()
    .setCustomId("summonButton")
    .setLabel("Summon")
    .setStyle(ButtonStyle.Primary)
    .setEmoji("<:person:1175874048643842099>");

  // action row
  const actionRow = new ActionRowBuilder()
    .addComponents(playButton);

  return { embeds: [embed], components: [actionRow] };
}
