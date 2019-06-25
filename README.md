# hello-world-full-e2e
> Proof of concept collecting code coverage from the backend server while running Cypress e2e tests

## Backend coverage without API call

If the end-to-end test does not call the API method

```js
it('works', () => {
  // cy.request('/hello')
})
```

Then the backend source shows it has not been executed

![Coverage without API call](images/no-call.png)

If we execute the backend call from the Cypress test

```js
it('works', () => {
  cy.request('/hello')
})
```

Then the coverage shows the code has been executed

![Coverage with API call](images/with-call.png)
