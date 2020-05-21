const path = require('path');
const yaml = require('js-yaml');
const fs = require('fs');

const addAnchorAddress = function(basePath, pageContents) {
  pageContents.forEach((item) => {
    if (!item.anchor) item.anchor = `${basePath}#` + item.name.toLowerCase().replace(/ /g, '-').replace(/&/g, '');
    item.children && item.children.map((firstChild) => {
      if (!firstChild.anchor) firstChild.anchor = `${basePath}#` + firstChild.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
      firstChild.children && firstChild.children.map((secondChild) => {
        if (!secondChild.anchor) {
          secondChild.anchor = `${basePath}#` + secondChild.name.toLowerCase().replace(/ /g, '-').replace(/\./g, '');
        }
      })
    })
  })
}

try {
  var pageConfig = yaml.safeLoad(fs.readFileSync('./page-config.yaml', 'utf8'));
} catch (error) {
  console.log(error);
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;
  //create nav node
  const navNodeData = {
    key: 0,
    contents: pageConfig.nav
  }
  const navNodeContent = JSON.stringify(navNodeData)
  const navNodeMeta = {
    id: createNodeId(`menu-contents-${navNodeData.key}`),
    internal: {
      type: 'Nav',
      content: navNodeContent,
      contentDigest: createContentDigest(navNodeData)
    }
  }
  const navNode = Object.assign({}, navNodeData, navNodeMeta)
  createNode(navNode);

  //create a node containing the table of contents for each page from page-config
  let i = 2;
  pageConfig.pages.forEach((page) => {
    if (page.sidemenu !== undefined) {
      addAnchorAddress(page.path, page.sidemenu)
      const nodeData = {
        key: i,
        contents: page.sidemenu
      }
      const nodeContent = JSON.stringify(nodeData)
      const nodeMeta = {
        id: createNodeId(`menu-contents-${nodeData.key}`),
        sourceInstancePath: page.path,
        title: page.title,
        parent: null,
        children: [],
        internal: {
          type: 'SideMenu',
          content: nodeContent,
          contentDigest: createContentDigest(nodeData)
        }
      }
      const node = Object.assign({}, nodeData, nodeMeta)
      createNode(node);
      i++;
    }
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  const defaultTemplate = path.resolve('src/templates/basic-page.js')
  const docTemplate = path.resolve('src/templates/doc-page.js')

  createRedirect({
    fromPath: '/reference/realtime',
    toPath: '/reference/realtime/v2',
    isPermanent: true
  });

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              template
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { path, template } = node.frontmatter;

      const context = {
      };

      const matchedPage = pageConfig.pages.find((page) => {
        return page.path === path
      });

      if (matchedPage) {
        addAnchorAddress(matchedPage.path, matchedPage.sidemenu)
        context.sidemenu = matchedPage.sidemenu
      }

      createPage({
        path,
        component: template === 'doc-page' ? docTemplate : defaultTemplate,
        context
      })
    })
  })
}
