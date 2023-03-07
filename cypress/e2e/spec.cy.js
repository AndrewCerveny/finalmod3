describe('empty spec', () => {
 beforeEach(()=> {
  cy.intercept('GET','http://localhost:3001/api/v1/urls',{
    fixture:'url'
  })
  cy.visit('http://localhost:3000/')
  })

  it('Should visit my page', function(){
    cy.visit('http://localhost:3000/')
  })
  it('Should have a title', function(){
    cy.get('h1').contains('URL Shortener')
  })
  it('Should have a display where the urls are visible',function(){
    cy.get('section').should('be.visible')
   cy.get('section > :nth-child(1)').should('be.visible')

  })
  it('Should have a form write inputs', function(){
    cy.get('form')
    cy.get('[placeholder="Title..."]').type('born wild').should('have.value','born wild')
    cy.get('[placeholder="URL to Shorten..."]').type('https://wildandkillingthegame.com').should('have.value','https://wildandkillingthegame.com')
    cy.get('button').click()
  })
  it('Should place a new URL on to the dom', function() {
    cy.get('form')
    cy.get('[placeholder="Title..."]').type('postedStub').should('have.value','postedStub')
    cy.get('[placeholder="URL to Shorten..."]').type('https://awesomehappypuppy.com').should('have.value','https://awesomehappypuppy.com')
    cy.get('button').click()
    
    cy.intercept('POST','http://localhost:3001/api/v1/urls',{
      fixture:'post'
    })
    cy.get(':nth-child(3) > h3').contains('postedStub')
    cy.get(':nth-child(3) > p').contains("https://awesomehappypuppy.com")

  })
})