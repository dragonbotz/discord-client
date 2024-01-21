/**
 * @fileoverview Character model implementation
 *
 * This file contains the implementation of the Character model
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
import { getRarityById, getRarityIcon, RarityIcon } from "../icons/rarity.ts";

export class Character {
  private id: number;
  private name: string;
  private image_url: string;
  private rarity: number;

  constructor(id: number, name: string, image_url: string, rarity: number) {
    this.id = id;
    this.name = name;
    this.image_url = image_url;
    this.rarity = rarity;
  }

  /**
   * Constructs a Character instance based on the given Character-like JSON
   * object
   *
   * @param {Character} character - The character object to build new Character from
   *
   * @returns {Character} - The newly created Character instance
   */
  static newFromJSON(character: Character): Character {
    const newCharacter = new Character(
      character.id,
      character.name,
      character.image_url,
      character.rarity,
    );

    return newCharacter;
  }

  /**
   * Returns Character's id
   *
   * @returns {number} - The character's id
   */
  getId(): number {
    return this.id;
  }

  /**
   * Returns Character's name
   *
   * @returns {string} - The character's name
   */
  getName(): string {
    return this.name;
  }

  /**
   * Returns Character's name with rarity and rarity modifier
   *
   * @returns {string} - The character's name with rarity modifier
   */
  getNameWithRarity(): string {
    const rarityIcon: RarityIcon = getRarityById(this.rarity);
    const rarityIconStr: string = getRarityIcon(rarityIcon);

    return `${rarityIconStr} ${this.name}`;
  }

  /**
   * Returns Character's image url
   *
   * @returns {string} - The character's image url
   */
  getImageUrl(): string {
    return this.image_url;
  }

  /**
   * Returns Character's rarity
   *
   * @returns {number} - The character's rarity
   */
  getRarity(): number {
    return this.rarity;
  }
}
