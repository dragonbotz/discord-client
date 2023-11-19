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
 * @returns
 */
export function getDiscordToken(): string | undefined {
	return Deno.env.get("DISCORD_TOKEN");
}
