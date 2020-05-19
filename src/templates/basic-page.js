import React from 'react';
import { graphql } from 'gatsby';
import styles from './basic-page.module.css';
import Layout from '../components/layout';
import Footer from '../components/footer';

export default function Template({ data, location }) {
    const {markdownRemark} = data // data.markdownRemark holds our post data
    const {html, frontmatter} = markdownRemark
    const {lang} = frontmatter


    return (
        <Layout lang={lang} location={location}>
            <div className={`${styles.basicPageContainer} container`}>
                <div className="row">
                    <div
                        className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1"
                        dangerouslySetInnerHTML={{__html: html}}
                    >
                    </div>
                </div>
            </div>
            <Footer className="footer"/>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        lang
      }
    }
  }
`
