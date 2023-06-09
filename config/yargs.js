const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type:'number',
                    demandOption:true,
                }) 
                .option('l', {
                    alias: 'listar',
                    type:'boolean',
                    default: false,
                }) 
                .option('h', {
                    alias: 'hasta',
                    type:'number',
                    default: 10,
                    demandOption:true,
                }) 
                .check((argv, options)=>{
                     if( isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                     } 
                     return true;  
                })   
                .argv



module.exports = argv;