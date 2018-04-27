/**
 *
 * Arquivo: promptsChoice.js
 * Data: 26/04/2018
 * Descrição: Desenvolvimento de um Bot onde será utilizado o recurso do 'Prompts.choice'
 * Author: Glaucia Lemos
 * Link (Documentação - Dialog (Prompts)):
 *
 */

const restify = require("restify");
const builder = require("botbuilder");

// Configuração do Server via Restify:
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log("%s Aplicação executando na porta %s", server.name, server.url);
});

// Criação do chat connector para comunicar com o serviço do Bot Framework:
const connector = new builder.ChatConnector({
  appId: "",
  appPassword: ""
});

// Endpoint para executar as mensagens para os usuários
server.post("/api/messages", connector.listen());

const bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    session => {
        builder.Prompts.text(session, "Olá! Qual é o seu nome?");
    },

    (session, results) => {
        session.userData.nome = results.response;
        builder.Prompts.number(session, `Oi ${session.userData.nome}, quanto tempo que você trabalha com programação?`);
    },

    (session, results) => {
        session.userData.anosExperienciaProgramacao = results.response;
        builder.Prompts.choice(session, "Qual é a sua linguagem de programação predileta?",
            "TypeScript | JavaScript | C# | Node.Js | Java | Python | Ruby", 
            { listStyle: builder.ListStyle.button }
        );
    },

    (session, results) => {
        session.userData.linguagem = results.response.entity;
        session.endConversation('Ah... Beleza ' 
            + session.userData.nome + '. Você tem trabalhado com programação por '
            + session.userData.anosExperienciaProgramacao + ' anos e curte programar com '
            + session.userData.linguagem
        );
    }
]);