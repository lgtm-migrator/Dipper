import { registerWidget } from '@antv/dipper-core';
import { CitySelect, SiderBar, NavBar } from '@antv/dipper-widgets';
// import { NavBar } from './NavBar';
import { GridLayer } from './GridLayer';
import { ClassifyColor } from './Classifycolor';
import { FunnelFilter } from './FunnelFilter';

export function initWidgets() {
  registerWidget('citySelect', CitySelect);
  registerWidget('siderbartabcontent', SiderBar);
  registerWidget('navibar', NavBar);
  registerWidget('gridLayer', GridLayer);
  registerWidget('classifycolor', ClassifyColor);
  registerWidget('funnelFilter', FunnelFilter);
}