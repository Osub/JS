const str = 'ES6';
console.log(`Hello ${str}`);

const Color = require('color');
console.log(Color);

import Dog from '../shared/dog';
console.log(new Dog().AMethod());