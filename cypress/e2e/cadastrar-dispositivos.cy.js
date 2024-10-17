// Funcionalidade 
// <reference types="cypress"/> 

describe('Cadastrar dispositivos', () => {

    //cenários de testes 1
    it('Buscar dispositivos com sucesso', () => {
        cy.request({
           method: 'POST',
           url: 'https://api.restful-api.dev/objects',
           body: {
            "name": "Pc gamer rs",
            "data": {
                "year": 2024,
                "price": 3000.99,
                "CPU model": "Intel Core i9",
                "Hard disk size": "2 TB"
            }
           }
        })
        .then((response) => {
            console.log("Minhas respostas :", response)
            expect(response.status).to.equal(200)
        })

    })

})