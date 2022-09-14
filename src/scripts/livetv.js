import { header } from '../components/header.js';
import { collapse } from '../components/liveTvCollapases.js';
document.querySelector('#header').innerHTML = header();
document.querySelector('#livetvFrame>div:nth-child(2)').innerHTML += collapse();