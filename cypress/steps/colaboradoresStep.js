import { And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ColaboradoresPage from '../pages/colaboradoresPage';
const colaboradoresPage = new ColaboradoresPage;
const faker = require('faker-br');

let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

When(/^acesso o menu de colaboradores$/, () => {
    colaboradoresPage.menuColaboradores();
});

And(/^clico em adicionar novo colaborador$/, () => {
    colaboradoresPage.AddBotao();
});

Then(/^adiciono um novo colaborador$/, () => {
	colaboradoresPage.adiconoUmNovoColaborador(firstName, lastName);
});

Then(/^busco um colaborador$/, () => {
	colaboradoresPage.buscarColaborador();
});
