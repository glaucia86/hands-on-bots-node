/**
 *
 * Arquivo: perguntarIdioma.js
 * Data: 26/03/2018
 * Descrição: Desenvolvimento de um Bot que solicita nome de usuário com uma
 * mensagem de saudação! (Conceitos de Armazenamento de Dados: 'dataDialog')
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
    session => {
        builder.Prompts.text(session, 'Oi! Tudo bem? Qual é o seu nome?');
    },

    (session, results) => {
        session.userData.nome = results.response;
        session.send(`Olá! ${session.userData.nome}`);

        session.beginDialog('/perguntarIdioma');
    }
]);

bot.dialog('/perguntarIdioma', [
    session => {
        builder.Prompts.text(session, 'Qual é o idioma que você sabe falar?');
    },

    (session, results) => {
        session.dialogData.idioma = results.response;

        session.endDialog(`Ótimo **${session.userData.nome}**, você sabe falar o idioma 
                        **${session.dialogData.idioma}**.`);
    }
]);


