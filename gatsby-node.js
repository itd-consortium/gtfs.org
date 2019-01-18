const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
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
} catch (e) {
  console.log(e);
}

//add slugs to all markdown file nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "MarkdownRemark" || node.internal.type === "Json") {
    const slug = createFilePath({ node, getNode, basePath: 'pages' }); //`${node.frontmatter.lang}` + ...
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
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

  //create docs nav node
  const docsNodeData = {
    key: 1,
    contents: pageConfig.docs_nav
  }
  const docsNodeContent = JSON.stringify(docsNodeData)
  const docsNodeMeta = {
    id: createNodeId(`menu-contents-${docsNodeData.key}`),
    internal: {
      type: 'Nav',
      content: docsNodeContent,
      contentDigest: createContentDigest(docsNodeData)
    }
  }
  const docsNode = Object.assign({}, docsNodeData, docsNodeMeta)
  createNode(docsNode);

  //create a node containing the table of contents for each page from page-config

  let i = 2;
  pageConfig.pages.forEach((page) => {
    if (page.sidemenu !== undefined) {
      addAnchorAddress(page.url, page.sidemenu)
      const nodeData = {
        key: i,
        contents: page.sidemenu
      }
      const nodeContent = JSON.stringify(nodeData)
      const nodeMeta = {
        id: createNodeId(`menu-contents-${nodeData.key}`),
        sourceInstanceName: page.title,
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

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const contentDictionary = {};

  createRedirect({
    fromPath: '/realtime', 
    toPath: '/realtime/v2', 
    isPermanent: true
  });

  pageConfig.pages.forEach((page) => {
    createPage({
      path: page.url,
      component: path.resolve(`./src/templates/${page.template}.js`),
      context: {
        //things passed here avail as graphql variables in page queries
        sourceInstanceName: page.title,
      }
    })
  })
}
