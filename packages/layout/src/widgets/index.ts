import { registerWidget } from '@antv/dipper-core';
import { DipperPopup } from './popup';
export * from './layer';
export { DipperPopup };
registerWidget('popup', DipperPopup);
