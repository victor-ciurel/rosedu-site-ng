module.exports = {
  siteMetadata: {
    title: `ROSEdu Website`
  },
  pathPrefix: '/site-ng',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ''
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 0,
        sv: 0
      }
    },
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'ro',
        useLangKeyLayout: false
      }
    }
  ]
}
