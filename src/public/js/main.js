import '../css/main.css';
import {
    print
} from './print.js';
import debug from 'debug';
import 'babel-polyfill';
import './vendor/ejs_production.js';
// import template from '../itemplate.ejs';


console.log('random textss');

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log(print);
    });
}

var assets = [{
    property: 'real_estate1',
    price: 1000000,
    owner: 'Zhou Kai'
}, {
    property: 'real_estate2',
    price: 2000000,
    owner: 'Zhou Kai'
}, {
    property: 'real_estate3',
    price: 3000000,
    owner: 'Zhou Kai'
}, {
    property: 'real_estate4',
    price: 4000000,
    owner: 'Zhou Kai'
}, {
    property: 'real_estate5',
    price: 3000000,
    owner: 'Zhou Kai'
}, ];


var html = new EJS({
    url: './itemplate.ejs'
        // file: template(assets)
}).render(assets);
console.log('template: ' + template);
console.log('html: ' + html);