// PROCESS: Volem passar el paràmetre de la base directament quan executem des de la consola!
// Fem servir la variable d'entorn PROCESS de node
// i dins d'aquesta el mètode ARGV on podrem passar com a argument la nostra base.

const argv = require('./config/yargs').argv; // el mateix que desestructurar (crec que com que n'importem un, ho fa així)

const colors = require('colors');

const { crearArxiu, llistarTaula } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {

    case 'llistar':

        llistarTaula(argv.base, argv.limit);
        break;

    case 'crear':

        crearArxiu(argv.base, argv.limit)
            .then(arxiu => console.log(`L'arxiu ${arxiu.green} ha estat creat`)) // oju, si arxiu fos un objecte que tingués la propietat green, la cagaríem, hauríem d'importar colors d'una altra manera (mirar documentació pàgina).
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconegut');

}

// let argv2 = process.argv;

// console.log(argv.base);

//let parametre = argv[2]; // els dos primers llocs de l'array estan ocupats pels directoris del node i del meu arxiu!

// let base = parametre.split('=')[1]; //només vull veure per consola la base[1], l'element[0] (--base) no el mostrarà!