const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //implement node event listeners here
      if (config.env.ENVIRONMENT == "session1") {
        return {
          baseUrl: "https://studio.stage.edx.org",
          specPattern: "cypress/e2e/session1/**/*.cy.js",
        };
      } else if (config.env.ENVIRONMENT == "session2") {
        return {
          baseUrl: "http://the-internet.herokuapp.com/",
          specPattern: "cypress/e2e/session2/**/*.cy.js",
          chromeWebSecurity: false,
        };
      } else if (config.env.ENVIRONMENT == "assignment1") {
        return {
          baseUrl: "http://the-internet.herokuapp.com/",
          specPattern: "cypress/e2e/Assignment1/**/*.cy.js",
          chromeWebSecurity: false,
        };
      }
    },
  },
});
