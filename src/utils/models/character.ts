/**
 * @fileoverview Character model implementation
 *
 * This file contains the implementation of the Character model
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */
export class Character {
  id: number;
  name: string;
  imageUrl: string;

  constructor(id: number, name: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
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
   * Returns Character's image url
   *
   * @returns {string} - The character's image url
   */
  getImageUrl(): string {
    return this.imageUrl;
  }
}
