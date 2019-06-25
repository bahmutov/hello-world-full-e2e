/// <reference types="cypress" />
after(() => {
  // grab the server code coverage only once after all tests
  cy.request('/__coverage__', { log: false })
    .then(r => Cypress._.get(r, 'body.coverage'), { log: false })
    .then(coverage => {
      cy.task('combineCoverage', coverage)
    })
})

// but before "regular" frontend code coverage is saved
// this way the server code coverage will be combined
// with frontend code coverage and a single combined report will be saved
require('@cypress/code-coverage/support')
