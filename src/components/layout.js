import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from './header'
import './layout.css';
import './i18n';


const Layout = ({ children, lang, location }) => (
    <StaticQuery
        query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <div>
                <Helmet
                    title={data.site.siteMetadata.title}
                    meta={[
                        {name: 'description', content: 'Sample'},
                        {name: 'keywords', content: 'sample, something'},
                    ]}>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92157254-1"></script>
                    <script>
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-92157254-1');
            `}
                    </script>
                    <html lang={lang}/>
                </Helmet>
                <div>
                    <Header
                        siteTitle={data.site.siteMetadata.title}
                        lang={lang}
                        location={location}
                    />
                </div>
                <div>
                    {children}
                </div>
            </div>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    lang: PropTypes.string.isRequired
}

export default Layout
