import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';
import styles from './doc-page.module.css';
import SideNav from "../components/side-nav";
import Footer from '../components/footer';

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler


function throttled(delay, fn) {
  let lastCall = 0;
  return (...args) => {
    const now = (new Date()).getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  }
}

export default class DocPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.pageContents = this.data.allSideMenu.edges[0].node.contents;
    this.pageName = this.data.allSideMenu.edges[0].node.sourceInstanceName;
    this.nodeDictionary = {};
    this.sortedHast = [];
    this.anchors = [];
    this.state = {
      parsingComplete: false,
      pageYOffset: 0
    }
    // this.trackScrollLocation = this.trackScrollLocation.bind(this);
    this.logOffset = this.logOffset.bind(this);
    this.throttledLogOffset = throttled(500, this.logOffset)
  }

  componentDidMount() {
    this.grabAnchors();
    this.mapDataToDictionary();
    // this.addAnchorAddress();
    this.trackScrollLocation();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledLogOffset);
  }

  grabAnchors() {
    this.anchors = document.getElementsByClassName('anchor');
  }

  logOffset() {
    let newOffset = window.pageYOffset;
    this.setState({
      pageYOffset: newOffset
    });
  }

  trackScrollLocation() {
    window.addEventListener('scroll', this.throttledLogOffset);
  }

  mapDataToDictionary() {
    this.data.allFile.edges.forEach(({node}) => {
      if (node.internal.mediaType === "text/markdown") { //ignore photo nodes
        let key = node.name;
        let content = node.childMarkdownRemark.htmlAst;
        let pair = {};
        pair[key] = content;
        Object.assign(this.nodeDictionary, pair)
      }
    });
    this.sortDictionary()
  }

  sortDictionary() {
    this.pageContents.forEach((section) => {
      if (section.slug !== undefined) {
        let hast = this.nodeDictionary[section.slug]
        if (hast !== undefined) this.sortedHast.push(hast);
        if (section.children) {
          section.children.forEach((child) => {
            let childHast = this.nodeDictionary[child.slug];
            if (childHast !== undefined) this.sortedHast.push(childHast);
          });
        }
      }
    });
    this.setState({parsingComplete: true});
  }

  render() {
    const showName = (this.pageName === "Realtime Reference v2" || this.pageName === "Realtime Reference v1");
    let pageYOffset = this.state.pageYOffset;
    return(
      <Layout>
        <div className={styles.container}>
          <div className={styles.navContainer}>
            <SideNav
              pageName={this.pageName}
              content={this.pageContents}
              route={this.props.location.pathname}
              currentOffset={pageYOffset}
              pageAnchors={this.anchors}
            />
          </div>
          <div className={styles.contentContainer}>
            {showName && <h1>{'GTFS ' + this.pageName}</h1>}
            {this.state.parsingComplete && this.sortedHast.map(node => renderAst(node))}
          </div>
          <Footer/>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query($sourceInstanceName: String!) {

    allSideMenu(filter: {sourceInstanceName: {eq: $sourceInstanceName}}) {
      edges {

        node {
          id
          sourceInstanceName
          contents {
            name
            slug
            anchor
            children {
              name
              slug
              anchor
              children {
                name
                anchor
                children {
                  name
                  anchor
                }
              }
            }
          }
        }
      }
    }

    allFile(filter: {sourceInstanceName: {eq: $sourceInstanceName}}) {
      edges {
        node {
          internal {
            mediaType
          }
          name
          childMarkdownRemark {
            htmlAst
          }
        }
      }
    }
  }
`
