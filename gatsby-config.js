module.exports = {
  __experimentalThemes: [{
    resolve: 'gatsby-theme-docz'
  }],
  plugins: [
    {
      resolve: `gatsby-plugin-svgr`
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `${__dirname}/lib/components/`,
      },
    },
    {
      resolve: `gatsby-transformer-react-docgen`
    },
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
    }
  ]
}