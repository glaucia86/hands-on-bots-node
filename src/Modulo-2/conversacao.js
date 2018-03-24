/**
 * Arquivo: conversacaoBot.js
 * Data: 17/03/2018
 * Descrição: Desenvolvimento de um Bot usando Dialog via Emulator
 * Author: Glaucia Lemos
 *
 */

const restify = require("restify");
const builder = require("botbuilder");

//Configuração do Server via restify:
const server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
  console.log("%s Aplicação executando na porta %s", server.name, server.url);
});

const connector = new builder.ChatConnector({
  appId: "",
  appPassword: ""
});

//Endpoint para executar as mensagens para o usuário:
server.post("api/messages", connector.listen());

const bot = new builder.UniversalBot(connector);

//Bloco de Diálogos
bot.dialog("/", [
  session => {
    builder.Prompts.text(session, "Olá! Tudo bem?");
  },

  session => {
    builder.Prompts.text(session, "Como você se chama?");
  },

  (session, results) => {
    let msg = results.response;
    session.send(`Oi ${msg}! Em que posso ajudar?`);
  }
]);
