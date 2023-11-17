import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pages/loginPage';
const loginPage = new LoginPage

let name = 'Admin'
let password = 'admin123'
let urlLogin = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"

Given(/^acesso a pagina de login$/, () => {
	cy.visit(urlLogin)
});

When(/^realizo o login com dados válidos$/, () => {
    loginPage.fazerLogin(name,password)
});

Then(/^login é realizado com sucesso$/, () => {
	loginPage.validaOSucessoDoLogin()
});


Given(/^login e realizado$/, () => {
    cy.visit(urlLogin)
    loginPage.fazerLogin(name,password)
    loginPage.validaOSucessoDoLogin()
});


When(/^realizo login com "([^"]*)" e "([^"]*)"$/, (name,password) => {
	loginPage.fazerLogin(name,password)
});

Then(/^alerta de dados incorretos é exibido$/, () => {
	loginPage.validaOErroDoLogin()
});

Then(/^alerta de "([^"]*)" é exibido com sucesso$/, (test) => {
    loginPage.requiredError()
});
