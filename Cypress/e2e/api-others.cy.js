
describe('GET - Chect duration', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        failOnStatusCode: false
    }
    it('test duration', () => {
        cy.request(request).then(response => {
            cy.log(response.duration)

            assert.isTrue(response.duration <= 200)
        });
    });
});