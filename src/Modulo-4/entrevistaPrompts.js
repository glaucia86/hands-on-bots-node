/**
 *
 * Arquivo: entrevistaPrompts.js
 * Data: 26/04/2018
 * Descrição: Desenvolvimento de um Bot onde será utilizado diferentes tipos de Prompts.
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
    (session, results, next) => {
        builder.Prompts.text(session, 'Olá! Qual é o seu nome?');
    },

    (session, results) => {
        session.dialogData.nome = results.response;
        builder.Prompts.text(session, `Oi ${session.dialogData.nome}. Qual é a sua profissão?`);
    },

    (session, results) => {
        session.dialogData.profissao = results.response;
        builder.Prompts.number(session, `${session.dialogData.nome} quantos anos você tem?`);
    },

    (session, results) => {
        session.dialogData.idade = results.response;
        builder.Prompts.time(session, `Você pode informar que horas são agora?`);
    },

    (session, results) => {
        session.dialogData.horaAtual = builder.EntityRecognizer.resolveTime([results.response]);
        builder.Prompts.confirm(session, `Você deseja ver o seu questionário?`, { listStyle: builder.ListStyle.button });
    },

    (session, results) => {
        if (results.response) {
            session.endDialog(`Os detalhes do seu questionário foi: 
                <br />Nome: **${session.dialogData.nome}**
                <br />Profissão: **${session.dialogData.profissao}**
                <br />Idade: **${session.dialogData.idade}**
                <br />Hora Atual: **${session.dialogData.horaAtual}**`);
        } else {
            session.endDialog("Até a próxima! Tchau!")
        }
    }
]);