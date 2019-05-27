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
          include: /src/
        }
      }
    }
  ]
}