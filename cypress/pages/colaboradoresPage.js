class ColaboradoresPage {
    inputFirstName = () => cy.get('input[placeholder="First Name"]')
    inputLastName = () => cy.get('input[placeholder="Last Name"]')
    botao = () => cy.get('button')
    span = () => cy.get('span')
    inputSearch = () => cy.get('input[placeholder="Type for hints..."]');
    menuColaboradores(){
        this.span().contains('PIM').click()
    }

    AddBotao(){
        this.botao().contains('Add').click()
    }
    
    adiconoUmNovoColaborador(firstName, lastName){
        if (firstName !== "") {
            this.inputFirstName().type(firstName);
        }
        this.inputLastName().type(lastName);
        this.botao().contains('Save').click();
    }

    buscarColaborador() {
        this.inputSearch().clear().type('Aaaa');
        this.botao().contains('Search').click();
    }
    
    buscarColaborador (){
        this.inputSearch().first().type('A');
        this.botao().contains('Search').click({ force: true });  
    }
}

export default ColaboradoresPage;
