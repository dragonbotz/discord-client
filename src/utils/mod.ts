/**
 * @fileoverview Utility function implementation
 *
 * This file contains utility functions implementation
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */

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
