/**
 * @fileoverview Summon feature implementation
 *
 * This file contains the implementation of the Summon feature
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { Character } from "../../utils/models/character.ts";
import { isEmptyJSON } from "../../utils/mod.ts";
import { Message } from "../../utils/models/message.ts";
import { Client, EmbedBuilder, User } from "npm:discord.js@14.14";
import { getDefaultEmbed } from "../../utils/mod.ts";

export class Summon {
  /**
	 * Executes the summon command by summoning a character and returning the
	 * message to display on discord

	 * @param {Client} client - The Discord client
	 * @param {User} user - The Discord User who invoked the command
	 *
	 * @returns {Message} - The message to display on discord
	 */
  async executeCommand(client: Client, user: User): Promise<Message> {
    const character: Character | null = await this.summon();

    let stored = false;
    if (character != null) {
      stored = await this.storeCharacter(user.id, character.getId());
    }

    return this.message(client, user, character, stored);
  }

  /**
   * Returns the formated message to display on discord
   *
   * @param {Client} client - The Discord client
   * @param {User} user - The Discord User who invoked the command
   * @param {Character | null} character - The Character that have been summoned
   *
   * @returns {Message} - The message to display on Discord
   */
  private message(
    client: Client,
    user: User,
    character: Character | null,
    stored: boolean,
  ): Message {
    const embed: EmbedBuilder = getDefaultEmbed(client);

    const message: Message = { content: "", embeds: [], components: [] };
    if (character == null || stored == false) {
      message.content =
        "❌ An error occured while summoning a character. Please try again later...";
      return message;
    }

    // fetch user's avatar url
    const avatar: string | null = user.avatarURL();
    if (avatar) {
      embed.setThumbnail(avatar);
    }

    embed.setTitle(`${user.globalName}'s summon`);
    embed.setDescription(character.getNameWithRarity());
    embed.setImage(character.getImageUrl());

    message.embeds = [embed];
    return message;
  }

  /**
   * Summons a `Character` and returns it
   *
   * @returns {Character} - The character that have been summoned
   */
  private async summon(): Promise<Character | null> {
    const summon_url = "http://127.0.0.1:58182/summon";
    try {
      const response = await fetch(summon_url);

      const responseResolved = await response.json();
      if (isEmptyJSON(responseResolved)) {
        console.debug("Summon#summon received an empty JSON object");
        return null;
      }

      return Character.newFromJSON(responseResolved);
    } catch (error) {
      console.error(`Summon#summon received an error: ${error}`);
      return null;
    }
  }

  /**
   * Stores a character to the player's character collection
   *
   * @param {number} playerId - The player id
   * @param {number} characterId - The character id
   */
  private async storeCharacter(
    playerId: string,
    characterId: number,
  ): Promise<boolean> {
    const characterCollectionUrl = "http://127.0.0.1:58183/character/add";
    try {
      const response = await fetch(characterCollectionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ player: playerId, character: characterId }),
      });

      if (response.status != 200) {
        return false;
      }
    } catch (error) {
      console.error(`Summon#storeCharacter received an error: ${error}`);
      return false;
    }

    return true;
  }
}
