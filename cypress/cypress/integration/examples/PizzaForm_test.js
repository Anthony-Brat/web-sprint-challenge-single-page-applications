describe("test adding text, select multiple toppings and submit form", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza");
    })
    it("add text, check boxes and submit form", function(){
        cy.get('input[name="name"]')
        .type("Anthony")
        .should("have.value","Anthony");
        cy.get("#pizza_size")
        .select("Large")
        .should("have.value","Large");
        cy.get('[type="checkbox"]')
        .check()
        .should("be.checked");
        cy.get("#special_instructions")
        .type("absolutely NO jalepenos")
        .should("have.value","absolutely NO jalepenos");
        
       cy.get("button").click();
             

    })
});