describe("Recipe", () => {
  it("visits recipe.html", () => {
    cy.visit("./recipe.html");
  });

  it("should have a main header", () => {
    cy.get("h1").should("have.length", 1);
    cy.get("h1").should("be.visible");
  });

  it("should have an image of the dish", () => {
    cy.get("img").should("have.length", 1).and("be.visible");
    cy.get("img").should("have.attr", "alt");
    cy.get("img").should("have.attr", "src");
  });

  it("should have the three sub headers", () => {
    cy.get("h2").should("have.length", 3);

    cy.get("h2").should((subs) => {
      expect(subs[0]).to.contain.text("Description");
      expect(subs[1]).to.contain.text("Ingredients");
      expect(subs[2]).to.contain.text("Directions");
    });
  });

  it("should have a paragraph description", () => {
    cy.get("p").should("have.length", 1);
    cy.get("p").should("be.visible");
  });

  it("should include an unordered ingredients list", () => {
    cy.get("ul").children().its("length").should("be.gte", 3);
  });

  it("should include an ordered directions list", () => {
    cy.get("ol").children().its("length").should("be.gte", 3);
  });
});
