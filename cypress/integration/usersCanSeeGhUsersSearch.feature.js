describe("Users can see GH search", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users",
      response: "fixture:users_search_index.json",
    });
    cy.visit("/");
  });
  it("user can see list of searches", () => {
    cy.get("#displaysearches").should("exist");
  });
  it("displays first search", () => {
    cy.get("#displaysearches").within(() => {
      cy.get("#firstsearch").should("exist");
    });
  });
});
