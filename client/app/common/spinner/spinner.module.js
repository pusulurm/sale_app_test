import angular from 'angular';
import SpinnerComponent from './spinner.component';
import './spinner.scss';
let spinerModule = 'common.spinner.module';

angular
.module(spinerModule, [])
.component('spinner', SpinnerComponent);

export default spinerModule;
