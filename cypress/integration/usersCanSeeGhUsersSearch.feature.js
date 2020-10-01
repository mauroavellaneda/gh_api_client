describe('Users can see GH search', () => {
    beforeEach(() => {
        cy.server();
        cy.route({
            method: "GET",
            url: "http://localhost:3000/api/v1/products",
            response: "fixture:users_search_index.json",

        });
        cy.visit("/");
    })
    it('user can see list of searches', () => {
        cy.get('#displaysearches').should('exist');
    } )
})