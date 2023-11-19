/**
 * @fileoverview Dragon Bot Z's Discord client entry point
 *
 * This file contains the implementation of Dragon Bot Z's Discord client entry
 * point
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { load } from "https://deno.land/std@0.207.0/dotenv/mod.ts";
import {
  Client,
  Events,
  GatewayIntentBits,
  REST,
  Routes,
} from "npm:discord.js@14.14";
import { getClientId, getDiscordToken } from "./utils/mod.ts";

// commands
import { Command } from "./core/command.ts";
import { HelloCommand } from "./commands/hello.ts";
import { PlayCommand } from "./commands/play.ts";

/**
 * Dragon Bot Z's Discord client entry point
 */
async function main(): Promise<void> {
  // fetch environment variables
  await load({ export: true });

  const discordToken = getDiscordToken();
  if (discordToken == undefined) {
    console.error("Discord Token is undefined");
    Deno.exit(1);
  }

  const clientId = getClientId();
  if (clientId == undefined) {
    console.error("Client ID is undefined");
    Deno.exit(1);
  }

  // discord client
  const client: Client = new Client({ intents: [GatewayIntentBits.Guilds] });

  // Client events
  // on client ready
  client.once(Events.ClientReady, (client) => {
    console.info(`Connected as ${client.user.tag}`);
  });

  // load commands
  const commands = new Map<string, Command>()
    .set("hello", new HelloCommand())
	.set("play", new PlayCommand());

  // puts the commands in an array to pass to discord
  const commandsRegister = [];
  for (const key of commands.keys()) {
    commandsRegister.push(commands.get(key).getData().toJSON());
  }

  // send commands to discord
  const rest = new REST().setToken(discordToken);
  await rest.put(
    Routes.applicationGuildCommands(clientId, "850778288473243648"),
    { body: commandsRegister },
  );

  // on interaction
  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) {
      return;
    }

	console.log(interaction.commandName);

    const command = commands.get(interaction.commandName);
    if (command == undefined) {
      console.error(`Command not found: ${interaction.commandName}`);
      return;
    }

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(`${error}`);
    }
  });

  client.login(discordToken);
}

main();
