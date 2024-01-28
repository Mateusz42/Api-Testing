describe('POST - httpbit return url', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    }

    it('response should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            assert.equal(expectedStatus, currentStatus);
        });
    });
});
