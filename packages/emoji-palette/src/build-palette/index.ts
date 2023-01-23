import { RGBArray } from '../build-rgb';
import { calculateColorDifference } from './calculate-color-difference';
import { orderByLuminance } from './order-by-luminance';
import { rgbToHex } from './rgb-to-hex';

export const buildPalette = (colorsList: RGBArray) => {
  const orderedByColor = orderByLuminance(colorsList);

  const colors = orderedByColor
    .map((col, i, arr) => {
      const hexColor = rgbToHex(col);

      if (i > 0) {
        const difference = calculateColorDifference(arr[i], arr[i - 1]);

        // if the distance is less than 120 we ommit that color
        if (difference < 120) {
          return;
        }
      }

      return hexColor;
    })
    .filter(Boolean);

  return colors as string[];
};
