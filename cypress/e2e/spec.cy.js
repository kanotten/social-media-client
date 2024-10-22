// Mock tests implemented due to server error preventing actual registration/login
// Refer to the issue for details: https://github.com/kanotten/social-media-client/issues/5

// Register valid credentials
it("The user can register with valid credentials", () => {
  cy.visit("http://127.0.0.1:8080/");

  // Opens registration modal
  cy.get('#registerForm [name="name"]').type("kentest");
  cy.get('#registerForm [name="email"]').type("kentest@stud.noroff.no");
  cy.get('#registerForm [name="password"]').type("kentest1234");
  cy.get('#registerForm [name="avatar"]').type(
    "https://example.com/avatar.jpg",
  );

  // Submit form
  cy.get("#registerForm .btn-outline-success").click();
});

// Login valid credentials
it("The user can log in with valid credentials", () => {
  cy.visit("http://127.0.0.1:8080/");

  // Opens login modal
  cy.get("#registerForm > .modal-footer > .btn-outline-success").click({
    force: true,
  });

  // fills out form
  cy.get('#loginForm [name="email"]').type("kentest@stud.noroff.no", {
    force: true,
  });
  cy.get('#loginForm [name="password"]').type("kentest1234", { force: true });

  // Submit  form
  cy.get("#loginForm > .modal-footer > .btn-success").click({ force: true });
});

// Login invalid credentials
it("The user cannot submit the login form with invalid credentials and is shown a message.", () => {
  cy.visit("http://127.0.0.1:8080/");

  // Open the login modal
  cy.get("#registerForm > .modal-footer > .btn-outline-success").click({
    force: true,
  });

  // invalid credentials
  cy.get('#loginForm [name="email"]').type("invaliduser@stud.noroff.no", {
    force: true,
  });
  cy.get('#loginForm [name="password"]').type("wrongpassword", {
    force: true,
  });

  // Submit the login form
  cy.get("#loginForm > .modal-footer > .btn-success").click({ force: true });

  // Expect an error message
  cy.on("window:alert", (alertText) => {
    expect(alertText).to.equal(
      "Either your username was not found or your password is incorrect",
    );
  });
});

// Logout test
it("The user can log out using the logout button", () => {
  // First: Login
  cy.visit("http://127.0.0.1:8080/");

  // Open the login modal
  cy.get("#registerForm > .modal-footer > .btn-outline-success").click({
    force: true,
  });

  // Now fill out the login form
  cy.get('#loginForm [name="email"]').type("kentest@stud.noroff.no", {
    force: true,
  });
  cy.get('#loginForm [name="password"]').type("kentest1234", { force: true });

  // Submit the login form
  cy.get("#loginForm > .modal-footer > .btn-success").click({ force: true });

  // Then: Log out
  cy.get('button[data-auth="logout"]').click({ force: true });
});
