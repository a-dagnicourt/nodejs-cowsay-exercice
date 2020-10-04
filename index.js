const infos = require('./information.js');
const cowsay = require('cowsay');

console.log(cowsay.say({
    text: `Hello I'm ${infos.name} from ${infos.campus} campus !`,
    e: 'oO',
    T: 'U'
}));