
const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

require('colors');


console.clear();


console.log('base: yargs', argv.base);



crearArchivo(argv.base, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err => console.log(err)); 
