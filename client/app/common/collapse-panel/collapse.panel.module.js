import angular from 'angular';
import CollapsePanelComponent from './collapse.panel.component';
import './collapse.panel.scss';
let collapsePanelModule = 'common.collapse.panel.module';

angular
.module(collapsePanelModule, [])
.component('collapsePanel', CollapsePanelComponent);

export default collapsePanelModule;
