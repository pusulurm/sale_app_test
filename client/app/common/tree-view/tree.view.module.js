import angular from 'angular';
import TreeViewComponent from './tree.view.component';
import './tree.view.scss';
let treeViewModule = 'common.tree.view.module';

angular
.module(treeViewModule, [])
.component('treeView', TreeViewComponent);

export default treeViewModule;
