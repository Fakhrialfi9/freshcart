if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>i(e,r),c={module:{uri:r},exports:o,require:l};s[r]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index--8kb8REW.css",revision:null},{url:"assets/index-BtwDmFHb.js",revision:null},{url:"index.html",revision:"fd41b435c2ae05cad20100e83ba2a330"},{url:"registerSW.js",revision:"492bc09bbdd2115518713bf348a08ae8"},{url:"manifest.webmanifest",revision:"fceb858880539c8a0655cecf5862a7a5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
