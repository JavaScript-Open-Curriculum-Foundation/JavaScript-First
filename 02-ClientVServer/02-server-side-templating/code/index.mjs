



// import Server from './layout/main.mjs';
import {Server,HTML,writeHTML} from './layout/main.mjs';
import {Nav, NavLinks, homepages} from './components/nav.mjs';
let links = NavLinks(homepages)

const home = HTML(`${ Nav(links)}`);

Server('/',7000,home)