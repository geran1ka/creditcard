/// <reference types="cypress" />

describe('Тестирование кредитной карты', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
  })

  it('добавить имя владельца карты', () => {
    cy.get('[id="name"]').type('Roman Khoruzhy');
    cy.get('[id="svgname"]').contains('ROMAN KHORUZHY');
  })

  it('добавить номер кредитной карты', () => {
    cy.get('[id="cardnumber"]').type('4444555522221111');
    cy.get('[id="svgnumber"]').contains('4444 5555 2222 1111')
  })
  
  it('добавить дату действия кредитной карты', () => {
    cy.get('[id="expirationdate"]').type('1012');
    cy.get('[id="svgexpire"]').contains('10/12')
  })

  it('добавить CVC-код кредитной карты', () => {
    cy.get('[id="securitycode"]').type('023');
    cy.get('[id="svgsecurity"]').contains('023')
  })


  it('Проверить валидность введенных данных - корректно', () => {
    cy.get('[id="name"]').type('Roman Khoruzhy');
    cy.get('[id="cardnumber"]').type('4444555522221111');
    cy.get('[id="expirationdate"]').type('1012');
    cy.get('[id="securitycode"]').type('023');
    cy.get('.form-button').click();
    cy.get('.message-title').contains('Данные валидны')
  })

  it('Проверить валидность введенных данных - не корректно (введено на кирилице)', () => {
    cy.get('[id="name"]').type('Роман Khoruzhy');
    cy.get('[id="cardnumber"]').type('4444555522221111');
    cy.get('[id="expirationdate"]').type('1012');
    cy.get('[id="securitycode"]').type('023');
    cy.get('.form-button').click();
    cy.get('.message-title').contains('Данные не валидны')
  })

  it('Проверить валидность введенных данных - не корректно (введено одно слово)', () => {
    cy.get('[id="name"]').type('Khoruzhy');
    cy.get('[id="cardnumber"]').type('4444555522221111');
    cy.get('[id="expirationdate"]').type('1012');
    cy.get('[id="securitycode"]').type('023');
    cy.get('.form-button').click();
    cy.get('.message-title').contains('Данные не валидны')
  })

  it('Проверить валидность введенных данных - не корректно (CVC код 2 цифры)', () => {
    cy.get('[id="name"]').type('Roman Khoruzhy');
    cy.get('[id="cardnumber"]').type('4444555522221111');
    cy.get('[id="expirationdate"]').type('1012');
    cy.get('[id="securitycode"]').type('02');
    cy.get('.form-button').click();
    cy.get('.message-title').contains('Данные не валидны')
  })

  it('Проверить валидность введенных данных - не корректно (номер карты меньше 16)', () => {
    cy.get('[id="name"]').type('Roman Khoruzhy');
    cy.get('[id="cardnumber"]').type('444455552222111');
    cy.get('[id="expirationdate"]').type('1012');
    cy.get('[id="securitycode"]').type('02');
    cy.get('.form-button').click();
    cy.get('.message-title').contains('Данные не валидны')
  })
})