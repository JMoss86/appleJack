const dotenv = require("dotenv");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: `Applejacks`,
    description: `Where home meets healing`,
    author: `Jonathan Moss`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: `px7jn9eghm2j`,
        accessToken: `PL5W85uEEGXNV51TibHdIeIftNg_2yS6fL0csQbF6QI`,
        /*process.env.CONTENTFUL_ACCESS_TOKEN*/
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Applejack's Ranch`,
        short_name: `Applejack's Ranch`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        //~~For some reason, an update of various node modules let in tiny demons to break the site.
        //~~Commenting out the below line seems to have excorcised them.
        //icon: `src/images/fev_icon.png`, // This path is relative to the root of the site.
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
};
