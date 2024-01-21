/**
 * @fileoverview Button icons
 *
 * This file contains the declaration of button icons
 *
 * @author Lahcène Belhadi <lahcene.belhadi@gmail.com>
 */

export enum ButtonIcon {
  Again,
}

/**
 * Returns the requested rarity icon
 *
 * @param {ButtonIcon} icon - The icon
 *
 * @returns {string} - The button icon
 */
export function getButtonIcon(icon: ButtonIcon): string {
  switch (icon) {
    case ButtonIcon.Again:
      return "<:redo:1198256893051805736>";
  }
}
