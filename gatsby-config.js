module.exports = {
  siteMetadata: {
    title: `Entroprise`,
    description: `Deep Conversational Search.`,
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
        background_color: `#3f51b5`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
