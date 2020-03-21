import './main.scss';
import angular from 'angular';
import MainCtrl from './controllers/MainController';
import appComponent from './components/AppComponent';

angular
    .module('toDoApp', [])
    .controller('MainCtrl', MainCtrl)
    .component('app', appComponent)


