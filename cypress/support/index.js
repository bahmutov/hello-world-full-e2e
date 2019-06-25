/// <reference types="cypress" />
after(() => {
  // grab the server code coverage only once after all tests
  cy.request({
    url: '/__coverage__',
    log: false,
    failOnStatusCode: false
  })
    .then(r => {
      return Cypress._.get(r, 'body.coverage', null)
    }, { log: false })
    .then(coverage => {
      if (!coverage) {
        // we did not get code coverage - this is the
        // original failed request
        return
      }
      cy.task('combineCoverage', coverage)
    })
})

// but before "regular" frontend code coverage is saved
// this way the server code coverage will be combined
// with frontend code coverage and a single combined report will be saved
require('@cypress/code-coverage/support')
