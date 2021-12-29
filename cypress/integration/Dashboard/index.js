import {  Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Estou na página inicial', () => {
  cy.visit('/')
})

Given('Vejo próximas consultas', (setorInput) => {
  cy.visit('/')
})
