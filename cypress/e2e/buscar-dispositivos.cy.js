// Funcionalidade 
// <reference types="cypress"/> 

describe('Buscar dispositivos', () => {

    //cenários de testes 1
    it('Buscar dispositivos especifico', () => {
        cy.request({
           method: 'GET',
           url: 'https://api.restful-api.dev/objects/4'
        })
        .then((response) => {
            console.log("Minhas respostas :", response)
            expect(response.status).to.equal(200)
        })

    })

    //cenários de testes 2
    //it('Buscar dispositivos especifico', () => {

    //})


    //cenários de testes 3



})