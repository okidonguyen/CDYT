require('babel-register');

const router = require('./src/routes/sitemapRouter.js').default;
const Sitemap = require('../').default;

new Sitemap(router).build('localhost/').save('./sitemap.xml');
