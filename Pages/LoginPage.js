
class LoginPage {
    launcher() {
        return cy.visit('http://the-internet.herokuapp.com/login')
    }

    username(myusername) {
        cy.get('#username').clear().type(myusername)
        return this
    }

    password(mypassword) {
        cy.get('#password')
            .clear()
            .type(mypassword)
        return this
    }

    container (contain) {
        return cy.contains(contain)
    }

    loginButton() {
        return cy.get('.fa.fa-2x.fa-sign-in').click()
    }
}

export default LoginPage