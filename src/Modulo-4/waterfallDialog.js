/**
 *
 * Arquivo: waterfallDialog.js
 * Data: 20/05/2018
 * Descrição: Desenvolvimento de um Bot que simula uma reserva de um restaurante.
 * Author: Glaucia Lemos
 * 
 * Links (Manipulação de Waterfalls): 
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

const inMemoryStorage = new builder.MemoryBotStorage();

const bot = new builder.UniversalBot(connector, [
   (session) => {
       session.send("Seja Bem-Vindo(a) ao Restaurante Praias do Rio");
       builder.Prompts.time(session, "Por favor, informa a data e hora da reserva (ex.: 20 de Maio às 20h)");
   },

   (session, results) => {
       session.dialogData.dataReserva = builder.EntityRecognizer.resolveTime([results.response]);
       builder.Prompts.number(session, "Para quantas pessoas necessitará para a reserva?");
   },

   (session, results) => {
       session.dialogData.quantidadePessoas = results.response;
       builder.Prompts.text(session, "Em nome de quem gostaria de fazer a reserva?");
   },

   (session, results) => {
       session.dialogData.nomeReserva = results.response;

       // Vamos exibir as informações digitadas pelo usuário:
       session.send(`Reserva Confirmada. Segue os detalhes da Reserva: 
       <br />Dia/Hora: **${ session.dialogData.dataReserva }**
       <br />Quantidade de Pessoas: **${ session.dialogData.quantidadePessoas }**
       <br />Nome da Reserva: **${ session.dialogData.nomeReserva }**`);
       session.endDialog();
   }
]).set('storage', inMemoryStorage);