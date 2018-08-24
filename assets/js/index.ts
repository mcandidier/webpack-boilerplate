import '../sass/style.scss';
import * as $ from 'jquery';
import { Product } from './product';

let p1 = new Product('iphone', 'apple mobile phone');
let p2 = new Product('samsung', 'samsung mobile phone');

$(document).ready(function(){
    console.log('hello world');
});