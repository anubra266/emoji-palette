import { buildPalette } from './build-palette';
import { buildRgb } from './build-rgb';
import { quantization } from './quantization';

export function generatePalette(icon: string) {
  let _scale = window.devicePixelRatio * 2;
  let h = 96;

  let fontSize = h / _scale;

  let canvas = document.createElement('canvas');

  let ctx = canvas.getContext('2d')!;
  ctx.scale(_scale, _scale);

  ctx.font = `${fontSize}px Segoe Ui Emoji`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.direction = 'ltr';
  ctx.globalAlpha = 1.0;
  ctx.filter = 'none';
  ctx.globalCompositeOperation = 'source-over';
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.lineCap = 'butt';
  ctx.lineDashOffset = 0;
  ctx.lineJoin = 'miter';
  ctx.lineWidth = 0;
  ctx.miterLimit = 10;
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#ffffff';

  let _x = canvas.width / _scale / 2;
  let _y = canvas.height / _scale / 2;

  ctx.fillText(icon, _x, _y);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  // Convert the image data to RGB values so its much simpler
  const rgbArray = buildRgb(imageData.data);

  /**
   * Color quantization
   * A process that reduces the number of colors used in an image
   * while trying to visually maintain the original image as much as possible
   */
  const quantColors = quantization(rgbArray, 0);

  // Build the color palette
  const colors = buildPalette(quantColors);

  return colors;
}
