import {Nav, NavLinks, homepages} from './components/nav.mjs';
let links = NavLinks(homepages)

// console.log('====================================');
// console.log(     Nav(links)          );
// console.log('====================================');


import Server from './layout/main.mjs';
import {HTML,writeHTML} from './layout/main.mjs';

const home = HTML(`${ Nav(links)}`);

Server('/',7000,home)