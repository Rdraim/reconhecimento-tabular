<p align="right">
  <a href="README.md"><img src="assets/support/flag-pt-br.svg" width="36" height="24" alt="Português brasileiro" title="Português brasileiro"></a>
  <a href="README.en-US.md"><img src="assets/support/flag-en-us.svg" width="36" height="24" alt="English (United States)" title="English (United States)"></a>
  <a href="README.es-AR.md"><img src="assets/support/flag-es-ar.svg" width="36" height="24" alt="Español (Argentina)" title="Español (Argentina)"></a>
</p>

# reconhecimento-tabular

![reconhecimento-tabular](assets/support/project-pt-br.svg)

<!-- public-badges:start -->
[![license](assets/support/badge-license.svg)](LICENSE) [![CI](assets/support/badge-ci.svg)](https://github.com/Rdraim/reconhecimento-tabular/actions) [![release](assets/support/badge-release.svg)](https://github.com/Rdraim/reconhecimento-tabular/releases)
<!-- public-badges:end -->

<p>
  <a href="https://github.com/Rdraim/reconhecimento-tabular/tree/main/examples"><img src="assets/support/action-0-pt-br.svg" height="40" width="200" alt="Ver exemplos"></a>
  <a href="https://github.dev/Rdraim/reconhecimento-tabular"><img src="assets/support/action-1-pt-br.svg" height="40" width="200" alt="Editar no GitHub"></a>
  <a href="https://github.com/Rdraim/reconhecimento-tabular/archive/refs/heads/main.zip"><img src="assets/support/action-2-pt-br.svg" height="40" width="200" alt="Baixar código"></a>
</p>


Transforme a saída de extratores em células rastreáveis com confiança e revisão humana.

## Instalação

```bash
git clone https://github.com/Rdraim/reconhecimento-tabular.git
cd reconhecimento-tabular
npm test
node examples/basic.mjs
```

## Exemplo executável

```js
import {reconhecer} from './src/index.js';
console.log(await reconhecer('exemplo',{tipo:'imagem',adaptadores:{imagem:async()=>[[{texto:'Total',confianca:0.98},{texto:'100',confianca:0.65}]]}}));
```

## API

`reconhecer(entrada, {tipo, adaptadores, limiar:0.9, maxCelulas:100000})` exige adaptador explícito para csv, xlsx, pdf-texto ou imagem. Cada célula pode ser string ou `{texto, confianca}`. Retorna linhas, revisões por posição e prontoParaImportar. Confiança desconhecida exige revisão.

## Limites

Não inclui motor OCR, leitor XLSX ou parser PDF. Os adaptadores precisam limitar bytes, tempo e memória antes da extração; maxCelulas só limita a saída. Confiança alta não certifica exatidão. Revisão e autorização continuam necessárias para importar dados críticos.

## Compatibilidade

Núcleo sem dependências de runtime. Node.js 22 e 24 na CI. Instalação pelo Git; não há pacote deste projeto publicado no npm. Consulte Releases e fixe uma tag/commit ao integrar. Atualizações de dependências exigem análise de licença, engines e testes do consumidor. Um badge de CI não certifica segurança.

[Compatibilidade](COMPATIBILITY.md) · [Contribuição](CONTRIBUTING.md) · [Segurança](SECURITY.md)

MIT © Rodrigo Rodrigues

## ☕ Me pague um café

Este projeto te ajudou a resolver um problema, aprender algo novo ou dar os primeiros passos no desenvolvimento? Se você sentir vontade de apoiar meu trabalho, um café é uma forma carinhosa de agradecer.

Sou **Rodrigo Rodrigues**, criador do **Nexus** e destes projetos de código aberto. Seu apoio me ajuda a dedicar tempo para melhorar o código, escrever exemplos mais claros e continuar compartilhando o que aprendo.

**Contribua com o valor que fizer sentido para você. O apoio é totalmente voluntário — o projeto continua gratuito sob a licença MIT.**

<p>
  <a href="#apoie-com-pix"><img src="assets/support/pix-pt-br.svg" width="190" height="44" alt="Apoiar com Pix"></a>
  <a href="https://github.com/techrodrigo21-ux/reconhecimento-tabular/issues/new?title=Coment%C3%A1rio%3A%20este%20projeto%20me%20ajudou"><img src="assets/support/comment-pt-br.svg" width="210" height="44" alt="Deixar um comentário"></a>
</p>

### Apoie com Pix

No aplicativo do seu banco, escaneie o QR Code ou copie a chave Pix abaixo. Escolha o valor e confira os dados do destinatário antes de confirmar.

<p align="center">
  <img src="assets/support/pix-qr.png" width="260" alt="QR Code Pix original fornecido por Rodrigo Rodrigues; a chave em texto abaixo é uma alternativa.">
</p>

**Chave Pix**

```text
8875a24e-44d1-4c91-b6bb-62c9f0070955
```

Você também pode apoiar compartilhando o projeto, relatando um problema, melhorando a documentação ou deixando um comentário.

### Seu comentário também faz diferença

[Conte como o projeto te ajudou](https://github.com/techrodrigo21-ux/reconhecimento-tabular/issues/new?title=Coment%C3%A1rio%3A%20este%20projeto%20me%20ajudou). Vou gostar de saber o que você criou, o que aprendeu e o que poderia ficar mais claro para quem está começando.

O comentário é bem-vindo com ou sem doação. Preserve sua privacidade: não publique comprovantes, dados pessoais, credenciais ou informações de usuários nas Issues.

---

**Obrigado por apoiar meu trabalho e me ajudar a continuar criando e compartilhando. ❤️**
