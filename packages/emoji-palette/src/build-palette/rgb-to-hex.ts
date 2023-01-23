import { RGBArray } from '../build-rgb';

//  Convert each pixel value ( number ) to hexadecimal ( string ) with base 16
export const rgbToHex = (pixel: RGBArray[number]) => {
  const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  };

  return (
    '#' +
    componentToHex(pixel.r) +
    componentToHex(pixel.g) +
    componentToHex(pixel.b)
  ).toUpperCase();
};
