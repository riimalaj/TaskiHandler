it("Has text My todos", () => {
  cy.visit("/");

  cy.contains("My todos");
});

it("Can add a todo (todo added as a list item)", () => {
  cy.visit("/");

  const todoText = "A new todo " + Math.floor(10000 * Math.random());

  cy.get("input[type='text']").should("be.visible").type(todoText);
  cy.get("button").should("be.visible").click();

  cy.contains("li", todoText).should("be.visible");
});
