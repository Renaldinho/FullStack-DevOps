import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    baseUrl: "http://app:8000"
  },


  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts'
  }

})
