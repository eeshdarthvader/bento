module.exports = {
  __experimentalThemes: [{
    resolve: 'gatsby-theme-docz'
  }],
  plugins: [
    {
      resolve: 'gatsby-plugin-sass'
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#F77728`,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@lib": "lib",
          "@components": "./src/components/Docs",
        },
        extensions: [
          "js",
        ],
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /src/
        }
      }
    }
  ]
}