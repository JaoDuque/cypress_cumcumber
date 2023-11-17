class LoginPage {
    inputNome = () => cy.get('input[placeholder="Username"]');
    inputSenha = () => cy.get('input[placeholder="Password"]');
    botaoLogin = () => cy.get('button[type="submit"]');
    imagemLoginSucesso = () => cy.get('img[alt="profile picture"]');
    alertaDeErroLogin = () => cy.get('.oxd-alert-content > .oxd-text');
    requiredError = () => cy.get('.oxd-input-field-error-message');

    fazerLogin(name, password) {
        if (name) this.inputNome().type(name);
        if (password) this.inputSenha().type(password);
        this.botaoLogin().click();
    }

    validaOSucessoDoLogin() {
        this.imagemLoginSucesso().should('be.visible');
    }

    validaOErroDoLogin() {
        this.alertaDeErroLogin().should('have.text', 'Invalid credentials');
    }

    validaRequired(){
        this.requiredError().should('be.visible');
    }
}

export default LoginPage;
