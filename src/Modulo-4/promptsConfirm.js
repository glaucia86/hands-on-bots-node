/**
 *
 * Arquivo: promptsConfirm.js
 * Data: 26/04/2018
 * Descrição: Desenvolvimento de um Bot onde será utilizado o recurso do 'Prompts.confirm'
 * Author: Glaucia Lemos
 * Link (Documentação - Dialog): 
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
        let nome = results.response;
        session.send(`Oi! ${nome}. Seja Bem-Vindo(a) a Lanchonete XYZ`);

        session.beginDialog('/pedido');
    }
]);

bot.dialog('/pedido', [
    session => {
        builder.Prompts.text(session, "Qual é o seu pedido?");
    },

    (session, results) => {
        let pedido = results.response;
        session.send(`Okay! Você pediu: ${pedido}!`);

        builder.Prompts.confirm(session, "Gostaria de finalizar o seu pedido?", { listStyle: builder.ListStyle.button })
    },

    session => {
        session.endDialog("Okay! Estaremos entregando o seu pedido em breve!");
    }
]);