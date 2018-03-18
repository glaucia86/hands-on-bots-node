/**
 * Arquivo: conversacaoBot.js
 * Data: 17/03/2018
 * Descrição: Desenvolvimento de um Bot usando Dialog via Console.
 * Author: Glaucia Lemos
 *
 */

const builder = require('botbuilder');

const connector = new builder.ConsoleConnector().listen();
const bot = new builder.UniversalBot(connector);

bot.dialog('/', [
    (session) => {
        builder.Prompts.text(session, 'Oi! Tudo bem?');
    },

    (session) => {
        builder.Prompts.text(session, 'Qual é o seu nome?');
    },

    (session, results) => {
        let msg = results.response;
        session.send(`Oi ${msg}! Em que posso ajudar?`);
    }
]);