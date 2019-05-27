module.exports = {
  __experimentalThemes: [{
    resolve: 'gatsby-theme-docz'
  }],
  plugins: [
    {
      resolve: 'gatsby-plugin-sass'
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /docs/
        }
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/docs/pages/`
      }
    }
  ]
}