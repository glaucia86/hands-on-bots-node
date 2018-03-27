/**
 *
 * Arquivo: timeCoracao.js
 * Data: 26/03/2018
 * Descrição: Desenvolvimento de um Bot que pergunta ao usuário
 * o time de futebol do coração. (Usando os conceitos do método: endDialog')
 * Author: Glaucia Lemos
 * Link (Documentação - Dialog): https://goo.gl/2KHPph
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
bot.dialog("/", [
  session => {
    builder.Prompts.text(session, "Oi! Qual é o seu nome?");
  },

  (session, results) => {
    let nome = results.response;
    session.send(`Oi! ${nome}`);

    session.beginDialog("/perguntarTimeCoracao");
  }
]);

bot.dialog("/perguntarTimeCoracao", [
  session => {
    builder.Prompts.text(session, "Qual é o seu time de Futebol do Coração?");
  },

  (session, results) => {
    let timeCoracao = results.response;
    session.endDialog(`Vamos torcer no Campeonato Brasileiro para o time do **${timeCoracao}** em 2018!`);

    session.beginDialog("/perguntarLugarPreferido");
  }
]);

bot.dialog("/perguntarLugarPreferido", [
  session => {
    builder.Prompts.text(session, "Qual é o seu lugar preferido?");
  },

  (session, results) => {
    let lugar = results.response;
    session.endDialog(`Amamos o **${lugar}**! É simplesmente uma cidade muito bonita!`);
  }
]);
