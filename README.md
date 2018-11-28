# Hands On: Bots + Node.Js - Microsoft Bot Framework v.3 (Glaucia Lemos)

<p align="center">
  <img src="https://i.imgur.com/pA6SRQ6.gif"/>  
</p>

Repositório responsável pelos códigos desenvolvidos das vídeos aulas inerentes a nova série do meu canal do Youtube!
Essas vídeos aulas servirão também de material de apoio para a Maratona Bots que está ocorrendo no site: **[TI Capacitacion](https://ticapacitacion.com/curso/botspt/)**

Todo o conteúdo desenvolvido aqui, estão destinados a linguagem Node.Js. Caso queira aprender a desenvolver um Bot usando C#, acompanhe as vídeos aulas da Maratona Bots! 

Porém, estarei desenvolvendo as demos relacionadas aos códigos inerentes a Node.Js da Maratona Bots. Estarei diferenciando os códigos e vídeos da maratona via link do próprio repositório em questão e destacando nas grids também.

# Recursos Utilizados no Desenvolvimento: :rocket:

Para realizar as demos dessa série, se faz necessário instalar os seguintes programas:

* Visual Studio Code - [DOWNLOAD AQUI](https://code.visualstudio.com/)
* Node.JS - [DOWNLOAD AQUI](https://nodejs.org/en/)
* Microsoft Bot Framework Emulator - [DOWNLOAD AQUI](https://github.com/Microsoft/BotFramework-Emulator/releases
)
* Instalar a versão Python 2.x - [DOWNLOAD AQUI](https://www.python.org/downloads/)
* Instalar globalmente o node-gyp - [DOCUMENTAÇÃO PARA INSTALAÇÃO DE MANEIRA CORRETA AQUI](https://github.com/nodejs/node-gyp)

* Cadastro no site LUIS: https://www.luis.ai/
* Cadastro no site Azure: https://azure.microsoft.com/pt-br/services/bot-service/

OBS.: Quando seguir o passo da instalação do **node-gyp** é de suma importância que façam o seguinte:

**Passo 1:** criar manualmente o arquivo **binding.gyp** dentro do diretório do node_modules do appData, conforme o exemplo abaixo:

```

> C:\users\UserName\appdata\roaming\npm\node_modules\node-gyp

```

**Passo 2:** incluir no arquivo **binding.gyp** o seguinte bloco de código e salve:

```

{
    "targets": [{
    "target_name": "binding",
    "sources": [ "build/Release/binding.node" ]
    }]
}

```

**Passo 3:** feito isso, agore execute os seguintes comandos abaixo, dentro do mesmo diretório do appData:

```

> node-gyp configure

```

```

> node-gyp configure --msvs_version=2015

```

```

> node-gyp build

```

Seguindo todos esses passos, vocês estará para pronta para instalar as depedências do projeto na pasta do projeto! ;)

## Atualização da Instalação (node-gyp) 11/2018:

Devido a nova versão do Node.js, houve mudanças significativas inerente aos passos acima para a instalação do pacote **node-gyp**. 
Após a versão 10.x do Node.js bastam seguir os seguintes passos:

1º - Desinstale da sua máquina o Node.js

2º - Exclua a pasta **npm** localizada no AppData: (remove manualmente):

```
C:\Users\<folder-name>\AppData\Roaming\npm directory was not deleted.
```

3º - Reinstale a última versão do Node.js 10.x: [https://nodejs.org/en/](https://nodejs.org/en)

4º - Abre agora o prompt de comando como administrador e execute o comando abaixo:

```
> npm install npm@latest -g
```

5º - E finalmente, instale globalmente o pacote **node-gyp** no prompt de comando como adminstrador:

```
> npm install -g node-gyp
```

Depois de seguir esses passos, vá até o local onde está o projeto e digite o comando:

```
> npm install
```

O problema será resolvido! :)

## O que Preciso Saber para prosseguir na série?!

* **Ter noções de JavaScript:**
    - Desvendando a linguagem JavaScript (Rodrigo Branas): [AQUI](https://www.youtube.com/playlist?list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)


* **Ter noções de Node.js:**
    - Tutorial: CRUD API RESTful com: Node + Express + MongoDb (Glaucia Lemos): [AQUI](https://www.youtube.com/playlist?list=PLb2HQ45KP0WstF2TXsreWRv-WUr5tqzy1)

    - Curso: Criando APIs com NodeJs (Baltaio): [AQUI](https://www.youtube.com/playlist?list=PLHlHvK2lnJndvvycjBqQAbgEDqXxKLoqn)



## Demos Relacionadas ao Hands on (Node.JS):

| Módulo  | Aula | Código | Link (Vídeo Demo)  |
|---|---|---|---|
| Módulo 2  | Aula 03 | [Código](https://goo.gl/ac3FNV) | [Aula 03](https://goo.gl/WwScdc) | 
| Módulo 2  | Aula 04 | [Código](https://goo.gl/iV6vmY) | [Aula 04](https://goo.gl/KQX529) | 
| Módulo 2  | Aula 06 | [Código](https://goo.gl/31dBjr) | [Aula 06](https://youtu.be/ChuDIMqRSFc) | 
| Módulo 2  | Aula 07 | [Código](https://goo.gl/Sp1m7F) | [Aula 07](https://youtu.be/-pB48tj_9_w) | 
| Módulo 3  | Aula 09 | [Código](https://goo.gl/KtHNB3) | [Aula 09](https://youtu.be/sj_XvMzhiGw) | 
| Módulo 3  | Aula 10 | [Código](https://goo.gl/uB2pzn) | [Aula 10](https://youtu.be/5uJlHwbXZok) | 
| Módulo 3  | Aula 12 | [Código](https://goo.gl/L2ZkKq) | [Aula 12](https://youtu.be/yC831Q_BabI) | 
| Módulo 3  | Aula 13 | [Código](https://goo.gl/1YaqzN) | [Aula 13](https://youtu.be/AQFGpiB5MKY) | 
| Módulo 4  | Aula 15 | [Código](https://goo.gl/Kvsgiv) | [Aula 15](https://youtu.be/lj_bl8j4NRg) | 
| Módulo 4  | Aula 16 | [Código](https://goo.gl/KRv872) | [Aula 16](https://youtu.be/tLc02AQY4sg) | 
| Módulo 4  | Aula 17 | [Código](https://goo.gl/Tcwcam) | [Aula 17](https://youtu.be/urXta04b73U) | 


## Demos Relacionadas a Maratona Bots (Node.JS):


| Módulo  | Lição | Código | Link (Vídeo Demo)  |
|---|---|---|---|
| Exercícios Módulo 2  | Lições: 2 & 3 | [Código](https://goo.gl/KLXxH8)  | [Módulo 2](https://goo.gl/tUaTgD) | 
| Exercícios Módulo 3  | Lições: 1-5 | [Código](https://goo.gl/LeYgyb) | [Módulo 3](https://goo.gl/4411Cw) | 
| Exercícios Módulo 4  | Lições: 1-5 | [Código](https://goo.gl/DefmZ9) | [Módulo 4](https://goo.gl/ujHciH) | 
| Exercícios Módulo 5  | Lições:  | [Código]() | [Módulo 5](https://goo.gl/5xWbSq) | 

## Conteúdo da Série: Hands On: Bots + Node.Js - Microsoft BOT Framework  (* em desenvolvimento)

- **Módulo 01: Breve Introdução sobre Bots**
  * [Aula 01 - Breve Introdução sobre Bots](https://youtu.be/ziHcgSZ7j0Q)

- **Módulo 02: Desenvolvendo o meu primeiro Bot!**
  * [Aula 02 - Preparando o Ambiente de Desenvolvimento](https://youtu.be/jR9Tm0pT37M)
  * [Aula 03 - Desenvolvendo Bot via Console](https://youtu.be/rrKGqLYfKZE)
  * [Aula 04 - Desenvolvendo Bot via Bot Emulator](https://youtu.be/UJasDmv_ZYA)
  * [Aula 05 - Conceitos Chaves do Bot Builder SDK em Node.Js](https://youtu.be/Wd6lQqq54MQ)
  * [Aula 06 - Demo: Bot com Connector & Dialog via Console](https://youtu.be/ChuDIMqRSFc)
  * [Aula 07 - Demo: Bot com Connector & Dialog via Emulator](https://youtu.be/-pB48tj_9_w)

- **Módulo 03: Bots Conversam?! Sim Senhor!**
  * [Aula 08 - Conceitos sobre Dialogs (Teoria)](https://youtu.be/LmEtrYgOAEA)
  * [Aula 09 - Demo: Uso do método 'beginDialog'](https://youtu.be/sj_XvMzhiGw)
  * [Aula 10 - Demo: Uso do método 'endDialog'](https://youtu.be/5uJlHwbXZok)
  * [Aula 11 - Armazenamento de Dados em Dialogs (Teoria)](https://youtu.be/rq_8GJ34YMQ)
  * [Aula 12 - Demo: Uso da propriedade 'userData'](https://youtu.be/yC831Q_BabI)
  * [Aula 13 - Demo: Uso da propriedade 'dialogData'](https://youtu.be/AQFGpiB5MKY)

- **Módulo 04: (em desenvolvimento)**
  * [Aula 14 - Conceitos sobre Tipos de Prompts (Teoria)](https://youtu.be/88qWfHEsBDU)
  * [Aula 15 - Demo: Uso de 'Prompts.confirm'](https://youtu.be/lj_bl8j4NRg)
  * [Aula 16 - Demo: Uso de 'Prompts.choice'](https://youtu.be/tLc02AQY4sg)
  * [Aula 17 - Demo: Uso de Diferentes Tipos de Prompts](https://youtu.be/urXta04b73U)
  * [Aula 18 - Demo: Fluxo de Conversação: Waterfalls](https://youtu.be/YnwxjFJuowE)
  * [Aula 19 - ]()


**aulas em desenvolvimento**

## Algumas Observações Importantes!!! :fire:

**p.s.:As aulas procurarei estar enviando o maior número possível. Como estou fazendo o Hands on e ao mesmo tempo desenvolvendo as demos em vídeo em Node.Js da Maratona Bots, leva-se um tempo para editar e enviar vídeos. Assim que, peço que aguardem por novas vídeos aulas.**

**p.s.2: Quando tiver algum tema que não ficou compreensível a todos, estarei explicando via README.md. Com o propósito de criar uma documentação sobre o assunto para Node.**

## Quer Propor Melhorias no Código? Façam Pull Request!!! 

Caso queiram que eu implemente algo no código, abram uma [**ISSUE**](https://github.com/glaucia86/hands-on-bots-node/issues) nesse repositório. Assim, todos poderão colaborar para o melhor desenvolvimento desse repositório. E sintam-se à vontade em fazer Pull Requests!!


Espero que possam gostar das vídeos aulas dessa nova série no meu canal!!! Não esqueçam de dar uma :star: no repositório e claro: Apreciem sem moderação!! :heart: :heart: :heart:

<p align="center">
  <img src="https://i.imgur.com/dLSzYDT.gif"/>  
</p>


