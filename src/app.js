
  //write your code here
let pronombres = ['el', 'nuestro' ];
let adj = ['sabor', 'fantastico', 'linaje' ];
let sustantivo = ['pollo', 'cerdito', 'alienigena' ];
let tdd = ['.com', '.net', '.es' ];

  //generadores de dominios 
    for(let i = 0; i  < pronombres.length; i++){
      for(let j = 0; j  < adj.length; j++){
        for(let k = 0; k  < sustantivo.length; k++){
          for(let l = 0; l  < tdd.length; l++){
            console.log(pronombres[i] + adj[j] + sustantivo[k] + tdd[l]);
          }
        }
      }
    }
                      // --------> El Codigo para ejecutarlo es $ node ./src/app.js  <------------

