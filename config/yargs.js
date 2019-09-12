//

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('llistar', 'Imprimeix a la consola la taula de multiplicar', opts)
    .command('crear', 'Crea un fitxer .txt de la taula de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}