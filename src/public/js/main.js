import '../css/main.css';
import {
    print
} from './print.js';
import debug from 'debug';
import 'babel-polyfill';

console.log('random textss');

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log(print);
    });
}