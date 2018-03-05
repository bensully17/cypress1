describe('works', function () {
  it('.should() - assert that logo is correct', () => {
    cy.visit('localhost:3000')
    cy.title().should('include', 'PHP')
    cy.get('header > img').should('have.attr', 'src', './images/phptravels-logo.png')
    cy.get('h2').should('have.text', 'Application Test Drive.')
    cy.get('nav > ul > li').eq(0).find('a').should('have.text', 'Demo')
    cy.get('nav > ul > li').eq(1).find('a').should('have.text', 'Order')
    cy.get('nav > ul > li').eq(2).find('a').contains('Product').should('contain', 'Product')
    cy.get('nav > ul > li > ul > li').eq(1).find('a').should('have.text', 'Documentation')
    cy.get('nav > ul > li > ul > li').eq(2).find('a').should('have.text', 'Features')
    cy.get('nav > ul > li > ul > li').eq(3).find('a').should('have.text', 'Technology')
    cy.get('section > ul > li').should('have.lengthOf', '6')
    cy.get('nav > ul > li > a').contains('Order').click({force: true})
    cy.url().should('contain','/order')

  })
})