/**
 * @fileoverview Message utilities implementations
 *
 * This file contains the implementation of messages' utilities
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { ActionRowBuilder, EmbedBuilder } from "npm:discord.js@14.14";

export type MessageContent = {
  content: string;
  embeds: EmbedBuilder[];
  components: ActionRowBuilder[];
};

/**
 * Generates a default MessageContent
 *
 * @returns {MessageContent} - A default MessageContent
 */
export function defaultMessageContent(): MessageContent {
  return { content: "", embeds: [], components: [] };
}
