/// <reference types="cypress" />

export class LoginPage {

    navigate() {
        cy.visit('/')
    }

    enterUsername(user) {
        cy.get('[data-test=username]').type('{selectall}{backspace}' + user)
    }

    enterPassword(pwd) {
        cy.get('[data-test=password]').type('{selectall}{backspace}' + pwd)
    }

    clickLogin() {
        cy.get('#login-button').click()
    }
}