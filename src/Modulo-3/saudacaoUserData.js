/**
 *
 * Arquivo: saudacaoUserData.js
 * Data: 26/03/2018
 * Descrição: Desenvolvimento de um Bot que solicita nome de usuário com uma
 * mensagem de saudação! (Conceitos de Armazenamento de Dados: 'userData')
 * Author: Glaucia Lemos
 *
 * LINK: https://docs.microsoft.com/pt-br/azure/bot-service/nodejs/bot-builder-nodejs-state
 *
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

// Endpoint para executar as mensagens para os usuários:
server.post("api/messages", connector.listen());

const bot = new builder.UniversalBot(connector);

// Bloco de Dialogs:
bot.dialog('/', [
    (session, results, next) => {
        if (!session.userData.nome) {
            builder.Prompts.text(session, 'Olá! Tudo bem? Qual é o seu nome?')
        } else {
            next();
        }
    },

    (session, results) => {
        if (results.response) {
            let msg = results.response;
            session.userData.nome = msg;
        }

        session.send(`Olá! ${session.userData.nome}!`);
    }
]);
