import angular from 'angular';
import CheckboxListComponent from './checkbox.list.component';
import './checkbox.list.scss';
let checkboxListModule = 'common.checkbox.list.module';

angular
.module(checkboxListModule, [])
.component('checkboxList', CheckboxListComponent);

export default checkboxListModule;
