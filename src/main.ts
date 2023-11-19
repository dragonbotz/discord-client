/**
 * @fileoverview Dragon Bot Z's Discord client entry point
 *
 * This file contains the implementation of Dragon Bot Z's Discord client entry 
 * point
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts";
import { Client, Events, GatewayIntentBits } from "npm:discord.js@14.14";
import { getDiscordToken } from "./utils/mod.ts";

/**
 * Dragon Bot Z's Discord client entry point
 */
async function main(): Promise<void> {
	// fetch environment variables
	await load({export: true});

	const discordToken = getDiscordToken();
	if (discordToken == undefined) {
		console.error("Discord Token is undefined");
		Deno.exit(1);
	}

	// discord client
	const client: Client = new Client({intents: [GatewayIntentBits.Guilds]});
	client.once(Events.ClientReady, client => {
		console.info(`Connected as ${client.user.tag}`);
	});

	client.login(discordToken);
}

main();
