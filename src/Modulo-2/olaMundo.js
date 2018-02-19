/**
 * Arquivo: olaMundoBot.js
 * Data: 18/02/2018
 * Descrição: Desenvolvimento de um Bot via Bot Emulator.
 * Author: Glaucia Lemos
 *
 */

var restify = require('restify');
var builder = require('botbuilder');

//Configuração do Server via Restify:
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
    console.log('%s Aplicação está executando na porta %s', server.name, server.url);
});

//Criação do chat connector para comunicar com o serviço do Bot Framework:
var connector = new builder.ChatConnector({
    appId:'',
    appPassword: ''
});

//Endpoint para executar as mensagens para os usuários via Bot Emulator:
server.post("/api/messages", connector.listen());

//Aqui entra os nossos diálogos:
var bot = new builder.UniversalBot(connector, function(session) {
    session.send("Você disse: %s", session.message.text);
});

