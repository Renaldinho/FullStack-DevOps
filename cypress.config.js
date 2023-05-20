import { defineConfig } from 'cypress'

export default defineConfig({

  e2e: {
    baseUrl: "http://app:8000"
  },
  component: {
    componentFolder: 'src',
    testFiles: '**/*.cy.ts',
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
  },
})
