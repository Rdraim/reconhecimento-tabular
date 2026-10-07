import {reconhecer} from '../src/index.js';
console.log(await reconhecer('exemplo',{tipo:'imagem',adaptadores:{imagem:async()=>[[{texto:'Total',confianca:0.98},{texto:'100',confianca:0.65}]]}}));
