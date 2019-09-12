//
// Programa per fer taules de multiplicar
const fs = require('fs');

const colors = require('colors');

let llistarTaula = (base, limit = 10) => { // límit valdrà 10 si no li passo cap valor (encara que no cal, ho he especificat al yargs)

    console.log('================'.green);
    console.log(`= taula del ${ base } =`.green);
    console.log('================'.green);

    for (let i = 1; i <= limit; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }
}




let crearArxiu = (base, limit) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) { // Si la base no és número, llancem err i no segueix executant la funció (return).
            reject(`
                Èl valor introduït $ { base }
                no es un número `);
            return;
        }


        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }


        fs.writeFile(`taules/taula-${ base }-al-${ limit }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`taula-${base}-al-${limit}.txt`);
        });

    });
}

module.exports = { // és un objecte global de dins de module.
    crearArxiu, // crearArxiu: crearArxiu
    llistarTaula

}