/// <reference types="cypress" />

export class LoginPage {

    navigate() {
        cy.visit('/')
    }

    enterUsername(user) {
        cy.get('[data-test=username]').type(user)
    }

    enterPassword(pwd) {
        cy.get('[data-test=password]').type(pwd)
    }

    clickLogin() {
        cy.get('#login-button').click()
    }
}