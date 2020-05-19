require('dotenv').config();
const { langs } = require('./src/lib/i18n')

module.exports = {
  siteMetadata: {
    title: 'General Transit Feed Specification',
    languages: {
      langs,
      defaultLangKey: langs[0]
    }
  },
  plugins: [

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/feed-issues/`,
        name: "feed-issues"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/documentation/`,
        name: "documentation"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/validation-errors/`,
        name: "validation-errors"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/tutorial-003/`,
        name: "tutorial-003"
      }
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/validation-errors/`,
        name: "validation-errors"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/frequency-based-tripdescriptors/`,
        name: "frequency-based-tripdescriptors"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/non-frequency-based-tripdescriptors/`,
        name: "non-frequency-based-tripdescriptors"
      }
    }, {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/recommendation1/`,
        name: "recommendation1"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/recommendation2/`,
        name: "recommendation2"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/publishing-general-recommendations/`,
        name: "publishing-general-recommendations"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/validator/`,
        name: "validator"
      }
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages/en/guides/`,
        name: "Guides"
      }
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: 'Json'
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-transformer-remark",
      options: {
        pedantic: false,
        plugins: [ // some interesting plugins available to use with
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 250,
            }
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              offsetY: 150,
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-force-trailing-slashes',
    'gatsby-plugin-offline',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-meta-redirect',
  ],
}
