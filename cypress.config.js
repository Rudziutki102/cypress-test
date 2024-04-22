const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    projectId: "q7xcwd",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});
