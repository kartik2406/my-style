/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `My Style`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["material icons", "nunito:300,400,500,700"],
      },
    },
  ],
}
