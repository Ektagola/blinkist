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
