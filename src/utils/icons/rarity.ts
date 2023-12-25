/**
 * @fileoverview Rarity icons
 *
 * This file contains the reference to rarity icons
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */

// rarity icons ordered by rarity
const rarityIcons: string[] = [
  // 0: common
  "<:rarity_common:996897790334599198>",
  // 1: uncommon
  "<:rarity_uncommon:996897775348351057>",
  // 2: super
  "<:rarity_super:996897783225270323>",
  // 3: extreme
  "<:rarity_extreme:996897788543631370>",
  // 4: ultra
  "<:rarity_ultra:996897780314419291>",
  // 5: kami
  "<:rarity_kami:996897785532141618>",
];

const rarityModifiers: string[] = [
  // origins
  "<:rarity_origins:998240766700814376>",
];

export enum RarityIcon {
  Common,
  Uncommon,
  Super,
  Extreme,
  Ultra,
  Kami,
}

export enum RarityModifier {
  Origin,
}

/**
 * Returns the rarity icon corresponding to the rarity passed as argument
 *
 * @param {RarityIcon} rarity - The rarity
 *
 * @returns {string} - The rarity icon
 */
export function getRarityIcon(rarity: RarityIcon): string {
  return rarityIcons[rarity];
}

/**
 * Returns the RarityIcon variant according to the rarity id
 *
 * @param {number} id - The rarity id
 *
 * @returns {RarityIcon} - The RarityIcon variant corresponding to the rarity id
 */
export function getRarityById(id: number): RarityIcon {
  let rarityIcon: RarityIcon = RarityIcon.Common;
  switch (id) {
    case 0:
      rarityIcon = RarityIcon.Common;
      break;
    case 1:
      rarityIcon = RarityIcon.Uncommon;
      break;
    case 2:
      rarityIcon = RarityIcon.Super;
      break;
    case 3:
      rarityIcon = RarityIcon.Extreme;
      break;
    case 4:
      rarityIcon = RarityIcon.Ultra;
      break;
    case 5:
      rarityIcon = RarityIcon.Kami;
      break;
  }

  return rarityIcon;
}

/**
 * Returns the rarity modifier icon corresponding to the modifier variant
 * passed as argument
 *
 * @param {RarityModifier} modifier - The rarity modifier
 *
 * @returns {string} - The rarity modifier icon
 */
export function getRarityModifier(modifier: RarityModifier): string {
  return rarityModifiers[modifier];
}
