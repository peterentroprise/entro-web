module.exports = {
  siteMetadata: {
    title: `Entroprise`,
    description: `Merging the finite with infinite.`,
    author: `peter@entroprise.com`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Entroprise`,
        short_name: `Entroprise`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#219a49`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
