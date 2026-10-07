import {test} from 'node:test';import assert from 'node:assert/strict';
import {reconhecer} from '../src/index.js';
test('unknown confidence requires human review',async()=>{const r=await reconhecer('synthetic',{tipo:'csv',adaptadores:{csv:async()=>[['A',{texto:'10',confianca:.95}]]}});assert.equal(r.prontoParaImportar,false);assert.deepEqual(r.revisoes,[{linha:1,coluna:1,motivo:'sem-confianca'}]);});
test('invalid and excessive outputs reject',async()=>{await assert.rejects(reconhecer('',{tipo:'imagem',adaptadores:{imagem:async()=>[[{texto:'x',confianca:NaN}]]}}),TypeError);await assert.rejects(reconhecer('',{tipo:'xlsx',maxCelulas:1,adaptadores:{xlsx:async()=>[['a','b']]}}),RangeError);});
test('engine is explicit and high confidence passes',async()=>{await assert.rejects(reconhecer('',{tipo:'imagem',adaptadores:{}}),TypeError);const r=await reconhecer('',{tipo:'imagem',adaptadores:{imagem:async()=>[[{texto:'sample',confianca:1}]]}});assert.equal(r.prontoParaImportar,true);});

test('empty output cannot authorize import and missing confidence requests review',async()=>{const o={tipo:'csv',adaptadores:{csv:async()=>[]}};assert.equal((await reconhecer('',o)).prontoParaImportar,false);const r=await reconhecer('',{...o,adaptadores:{csv:async()=>[[{texto:'x'}]]}});assert.equal(r.revisoes[0].motivo,'sem-confianca');});
