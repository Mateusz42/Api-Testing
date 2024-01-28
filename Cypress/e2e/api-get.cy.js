describe('GET - httpbit return 200', () => {

    it('response should be 200', () => {
        cy.request('https://httpbin.org/#/').its('status').should('eq', 200);
    });
});

describe('GET - httpbit worki with response', () => {

    it('response should be 200', () => {
        cy.request('https://httpbin.org/#/').then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;
            
            assert.equal(expectedStatus, currentStatus);
        });
    });
});


