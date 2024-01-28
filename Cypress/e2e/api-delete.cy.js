describe('DELETE - httpbit Delete user request', () => {
    const headersRequest = {
        userName: "Test"
    }
    const request = {
        method: 'Delete',
        url: 'https://httpbin.org/delete',
        //delete: deleteRequest,
        failOnStatusCode: false
    }

    it('DELETE request should be successful', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

        
            //assert.notStrictEqual(deleteRequest, response.headers.data)
            assert.equal(expectedStatus, currentStatus);
        });
    });
});