if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/freshcart/sw.js', { scope: '/freshcart/' })})}