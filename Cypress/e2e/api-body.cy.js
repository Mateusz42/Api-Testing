describe('POST - httpbit wiyh Body', () => {
    const bodyRequest = {
        userName: "Test"
    }
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        body: bodyRequest,
        failOnStatusCode: false
    }

    it('response should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

        
            assert.notStrictEqual(bodyRequest, response.body.data)
            assert.equal(expectedStatus, currentStatus);
        });
    });
});