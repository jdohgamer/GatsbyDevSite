module.exports = {
  siteMetadata: {
    title: `Developer Unmasked`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sass`
  ]
};
