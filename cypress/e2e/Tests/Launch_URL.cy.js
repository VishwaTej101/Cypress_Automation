import Login from 'cypress/'

describe('Launch URL',()=>{

    it('test case 01',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq','OrangeHRM')
    })

})