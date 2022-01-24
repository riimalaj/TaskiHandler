// Tests will not fail due to seeing an error about hot reloading
Cypress.on("uncaught:exception", (err, runnable) => {
  if (err.message.includes("Hot Reloading")) {
    return false;
  }
});
