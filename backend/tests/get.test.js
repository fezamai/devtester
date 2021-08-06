const Code = require('@hapi/code');
const Lab = require('@hapi/lab');

//init é  constante(o objeto que põe o servidor no ar) que define o servidor da API (essa constante esta no arquivo server.js) lá é 
//definada a porta, o endereço, as rotas e coloca no ara o servidor com o comando await server.start();
//Estamos importando o init
const { init } = require('../server')

const { expect } = Code;
const { before, describe, it } = exports.lab = Lab.script();

describe('GET /contacts', ()=> {

    let resp;

    before(async () => {
        var server = await init(); //faz com que o servidor fique no ar dentro da camada de teste

        //Faz uma requisição GET na rota /contacts, obtem o resultado o qual fica guardado na variavel
        //resp 
        resp = await server.inject({
            method: 'get',
            url: '/contacts',
        })
    })

    it('deve retornar 200', async ()=> {
        expect(resp.statusCode).to.equal(200)
    })

    it('deve retornar uma lista', async () => {
        expect(resp.result).to.be.array()
    })

})
