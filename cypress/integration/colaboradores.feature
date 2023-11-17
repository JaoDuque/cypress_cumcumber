# language: en

Feature: Seção colaboradores
    Background: realizar login
        Given login e realizado
        When acesso o menu de colaboradores

    Scenario: Cadastro novo colaborador
        And clico em adicionar novo colaborador
        Then adiciono um novo colaborador

    Scenario: Buscar colaborador
        Then busco um colaborador 
        