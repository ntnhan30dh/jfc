/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      // offset: 1000
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
],
}
