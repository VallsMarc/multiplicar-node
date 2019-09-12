//

// const fs = require('fs'); // llibreria que ja porta node
// const ex = require('express') // Paquet que no porta node, l'instala. L'han fet altres persones.
// const bla = require('./fs') // Arxius que nosaltres creem i volem incluir en el projecte, es troben al meu pc.


const { crearArxiu } = require('./multiplicar/multiplicar'); // importo i desestructuro la funció crearArxiu
// de l'objecte global MODULE de l'arxiu multipilicar

let base = '5';


crearArxiu(base)
    .then(arxiu => console.log(`L'arxiu ${arxiu} ha estat creat`))
    .catch(e => console.log(e));