// Imports like this
import path from 'path';

// CSS like this
require('./index.less');

// Go...
document.body.innerHTML += `<p>${path.join('hi', '2', 'u')}</p>`;
