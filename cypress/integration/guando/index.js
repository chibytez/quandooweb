/// <reference types="cypress" />

import Login from "../../../Pages/LoginPage"
import Logout from "../../../Pages/LogoutPage"
import Helper from "../../support/commands"

describe ('User Login Test Cases', ()=>{
    const login = new Login()
    const logout = new Logout()
    const helper = new Helper()

    before('should launch url', ()=>{
        login.launcher()
        cy.url().should('be.equal', 'http://the-internet.herokuapp.com/login')
    })

    it('should not login a user with invalid username', ()=>{
        helper.logger(Cypress.env('invalidUsername'), Cypress.env('validPassword'),'Your username is invalid!')
    })

    it('should not login a user with empty username', ()=>{
        helper.logger(' ', Cypress.env('validPassword'), 'Your username is invalid!')
    })

    it('should not login a user with invalid password', ()=>{
        helper.logger(Cypress.env('validUsername'), Cypress.env('invalidPassword'), 'Your password is invalid!')
    })

    it('should not login a user with empty password', ()=>{
        helper.logger(Cypress.env('validUsername'), ' ', 'Your password is invalid!')
    })

    it('should login a user with valid credential', ()=>{
        helper.logger(Cypress.env('validUsername'), Cypress.env('validPassword'), 'You logged into a secure area!')
    })

    after('logout', ()=>{
        logout.logoutButton()
    })
})
