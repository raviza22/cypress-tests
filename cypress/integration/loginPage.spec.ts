///<reference types ="cypress" />

import { LoginPage } from "../pageObjects/loginPage"

describe('Swag Labs login page tests', function() {
    
    const loginPage = new LoginPage()

    before(() => {
        loginPage.navigate();
    })

    beforeEach(function() {
        cy.fixture('testdata').then(function(data) {
            this.data = data;
        })
    })

    it('should verify logo display', function() {
        cy.get('.login_logo').should('exist')
    })

    it('should verify bot display', function() {
        cy.get('.bot_column').should('exist')
    })

    it('should verify locked user error', function () {
        loginPage.enterUsername(this.data.invalidUser)
        loginPage.enterPassword(this.data.password)
        loginPage.clickLogin()

        cy.get('.error-button').should('exist')
        cy.get('[data-test=error]').should('contain', 'Sorry, this user has been locked out.')
    })
    
    it('should verify successful login', function() {
        loginPage.enterUsername(this.data.username)
        loginPage.enterPassword(this.data.password)
        loginPage.clickLogin()

        cy.url().should('include', 'inventory')
    })

})