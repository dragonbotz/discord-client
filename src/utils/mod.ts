/**
 * @fileoverview Utility function implementation
 *
 * This file contains utility functions implementation
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { Client, EmbedBuilder } from "npm:discord.js@14.14";

/**
 * Retrieves the client's discord token
 *
 * @returns {string | undefined} - The token or `undefined` if not found
 */
export function getDiscordToken(): string | undefined {
  return Deno.env.get("DISCORD_TOKEN");
}

/**
 * Retrieves the client's id
 *
 * @returns {string | undefined} - The client id or `undefined` if not found
 */
export function getClientId(): string | undefined {
  return Deno.env.get("CLIENT_ID");
}

/**
 * Returns Dragon Bot Z's default embed
 *
 * @returns {EmbedBuilder} - The Dragon Bot Z's default Embed
 */
export function getDefaultEmbed(client: Client): EmbedBuilder {
  // for copyright
  const currentYear = new Date().getFullYear();

  const defaultUserName = "Dragon Bot Z";
  let userName = defaultUserName;
  if (client.user != null) {
    userName = client.user.username;
  }

  return new EmbedBuilder()
    .setColor(0xfd8819)
    .setAuthor({ name: userName })
    .setFooter({ text: `©2019 - ${currentYear} Elias & Lahcène Belhadi` })
    .setTimestamp();
}

/**
 * Tells if the given JSON object is empty or not
 *
 * @param {object} json - The JSON object to test
 *
 * @returns {boolean} - True if the given object is empty, false otherwise
 */
export function isEmptyJSON(json: object): boolean {
  return Object.keys(json).length == 0;
}
