


describe('GET- httpbit return url', () => {
    const request = {
        url: 'https://httpbin.org/get',
        qs: {
            "key": "value"
        },
        failOnStatusCode: false
    }

    it('response and data should be correct', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentArgValue = response.body.args.key;
            const expectedArgValue = 'value'

            assert.equal(expectedStatus, currentStatus);
            assert.equal(expectedArgValue, currentArgValue)
            
            cy.log(response.body.args)
        });
    });
});
