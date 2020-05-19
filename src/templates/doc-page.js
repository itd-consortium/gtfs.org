import React from 'react';
import Layout from '../components/layout';
import {graphql, navigate} from 'gatsby';
import rehypeReact from 'rehype-react';
import styles from './doc-page.module.css';
import SideNav from "../components/side-nav";
import Footer from '../components/footer';
import {useTranslation} from 'react-i18next';
import {getPathForLanguage} from '../lib/i18n';

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

function VersionSelect(props) {
  const {t, i18n} = useTranslation();
  return (
      <div className="card mb-4 mt-3">
        <div className="card-body">
          <form className={styles.versionSelectForm}>
            <label htmlFor="versionSelect">{t('version')}</label>
            <select
                id="versionSelect"
                value={props.location.pathname}
                onChange={(event) => navigate(event.target.value)}
            >
              <option value={getPathForLanguage('/reference/realtime/v2/', i18n.language)}>2.0 ({t('latest')})</option>
              <option value={getPathForLanguage('/reference/realtime/v1/', i18n.language)}>1.0</option>
            </select>
          </form>
        </div>
      </div>
  );
}


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

    this.anchors = [];
    this.state = {
      pageYOffset: 0
    }
    this.trackScrollLocation = this.trackScrollLocation.bind(this);
    this.logOffset = this.logOffset.bind(this);
    this.throttledLogOffset = throttled(500, this.logOffset);
  }

  componentDidMount() {
    this.grabAnchors();
    this.trackScrollLocation();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledLogOffset);
  }

  grabAnchors() {
    this.anchors = document.getElementsByClassName('anchor');
  }

  logOffset() {
    const newOffset = window.pageYOffset;
    this.setState({
      pageYOffset: newOffset
    });
  }

  trackScrollLocation() {
    window.addEventListener('scroll', this.throttledLogOffset);
  }

  formatTable(hast) {
    hast.properties.className = ['table'];
    return {
      children: [hast],
      properties: {
        className: ['table-responsive']
      },
      tagName: 'div',
      type: 'element'
    };
  }

  render() {
    const pageYOffset = this.state.pageYOffset;

    const { data, location } = this.props
    const { markdownRemark, allSideMenu } = data // data.markdownRemark holds our post data
    const { frontmatter } = markdownRemark
    const { lang } = frontmatter
    const { pathname } = location

    const pageContents = allSideMenu ? allSideMenu.edges[0].node.contents : [];
    const pageTitle = allSideMenu ? allSideMenu.edges[0].node.title : '';
    const showTitle = pathname.includes('/reference/realtime/');
    const showVersionControl = pathname.includes('/reference/realtime/');

    const hast = markdownRemark.htmlAst.children.reduce((memo, hast) => {
      if (hast.tagName === 'table') {
        hast = this.formatTable(hast);
      }
      if (hast.children) {
        hast.children.forEach(hast => {
          if (hast.tagName === 'table') {
            hast = this.formatTable(hast);
          }
        });
      }

      if (hast.type !== 'text') {
        memo.push(hast);
      }

      return memo;
    }, []);

    return (
        <Layout lang={lang} location={location}>
          <div className={styles.container}>
            <div className={styles.navContainer}>
              <SideNav
                  content={pageContents}
                  route={pathname}
                  currentOffset={pageYOffset}
                  pageAnchors={this.anchors}
              />
            </div>
            <div className={styles.docContainer}>
              {showTitle && <h1>{pageTitle}</h1>}
              {showVersionControl && <VersionSelect location={location}/>}
              {renderAst({
                children: hast,
                type: 'root'
              })}
            </div>
            <Footer className="footerDocPage"/>
          </div>
        </Layout>
    );
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      frontmatter {
        path,
        lang
      }
    }
    
    allSideMenu(filter: {sourceInstancePath: {eq: $path}}) {
      edges {

        node {
          id
          sourceInstancePath
          title
          contents {
            name
            anchor
            children {
              name
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
  }
`
