describe('PATCH- httpbit patch tests', () => {
    const bodyData = {
        bodyKey: "bodyValue"
    };
    
    const request = {
        method: 'PATCH',
        url: 'https://httpbin.org/patch',
        body: bodyData,
        failOnStatusCode: false
    }

    it('PATCH request should update data', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;
            const data = { name: 'John', age: 31 };

            assert.equal(expectedStatus, currentStatus, data);
            assert.notStrictEqual(bodyData, response.body.data);
            

        });
    });
});