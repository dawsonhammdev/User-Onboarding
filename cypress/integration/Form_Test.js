describe("Testing our volunteer form", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000/");
    });

    it("Add test to inputs and submit form", function() {
        cy.get('input[name="name"]')
        .type("Dawson")
        .should("have.value", "Dawson")
        cy.get('input[name="email"]')
        .type("email@email.com")
        .should("have.value", "email@email.com")








    })
})