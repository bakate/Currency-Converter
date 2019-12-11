import { init } from './init';

// start the app!
const app = document.querySelector('.app');

app.addEventListener('mouseenter', init, { once: true });
