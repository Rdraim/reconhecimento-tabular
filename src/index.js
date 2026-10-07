const TIPOS=Object.freeze(['csv','xlsx','pdf-texto','imagem']);
/** Ports only. Parsing/OCR engines are supplied explicitly by the caller. */
export async function reconhecer(entrada,{tipo,adaptadores,limiar=0.9,maxCelulas=100000}={}) {
  if(!TIPOS.includes(tipo)||!adaptadores||!Object.hasOwn(adaptadores,tipo)||typeof adaptadores[tipo]!=='function')throw new TypeError('Explicit extraction adapter required');
  if(!Number.isFinite(limiar)||limiar<0||limiar>1||!Number.isSafeInteger(maxCelulas)||maxCelulas<1)throw new RangeError('Invalid extraction limits');
  const matriz=await adaptadores[tipo](entrada);
  if(!Array.isArray(matriz)||matriz.some(l=>!Array.isArray(l)))throw new TypeError('Adapter must return a cell matrix');
  if(matriz.reduce((n,l)=>n+l.length,0)>maxCelulas)throw new RangeError('Cell limit exceeded');
  const revisoes=[];
  const linhas=matriz.map((linha,i)=>linha.map((c,j)=>{
    const objeto=c!==null&&typeof c==='object';
    const texto=String(objeto?(c.texto??''):(c??''));
    const confianca=objeto?(c.confianca??null):null;
    if(confianca!==null&&(!Number.isFinite(confianca)||confianca<0||confianca>1))throw new TypeError('Confidence must be in [0,1]');
    const revisao=confianca===null||confianca<limiar;
    if(revisao)revisoes.push({linha:i+1,coluna:j+1,motivo:confianca===null?'sem-confianca':'baixa-confianca'});
    return {texto,confianca,revisao};
  }));
  return {tipo,linhas,revisoes,prontoParaImportar:linhas.some(l=>l.some(c=>c.texto.trim()))&&revisoes.length===0};
}
