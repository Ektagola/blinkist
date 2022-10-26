module.exports = {
  siteMetadata : {
    siteUrl: 'https://www.blinkist.com',
    title: "Unskill your team",
    description: "Frontend masters intro to gatsby course project",
    image: ''
},
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-background-image`,
    `react-native-wavy-background`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Segment`,
        short_name: `segment`,
        start_url: `/`,
        background_color: `#201038`,
        theme_color: `#201038`,
        display: `minimal-ui`,
        icon: `src/assets/short_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Roboto`,
          `source sans pro\:300,400,400i,700` 
        ],
        display: 'swap'
      }
    },
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: /assets/
    //     }
    //   }
    // }
  ],
}
