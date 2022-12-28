const { load } = require('js-yaml');
const { posts, tagList } = require('./config/collections/index.js');
const {
  readableDate,
  htmlDateString,
  getFullYear,
  filterTagList,
} = require('./config/filters/time.js');
const markdown = require('./config/plugins/markdown.js');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/assets/sass/');
  // Process Yaml files
  eleventyConfig.addDataExtension('yaml', load);

  // Passthroughs
  eleventyConfig.addPassthroughCopy('./src/assets/fonts/');
  eleventyConfig.addPassthroughCopy('./src/assets/images/');
  eleventyConfig.addPassthroughCopy('./src/assets/scripts/');

  // Filters
  eleventyConfig.addFilter('readableDate', readableDate);
  eleventyConfig.addFilter('htmlDateString', htmlDateString);
  eleventyConfig.addFilter('getFullYear', getFullYear);
  eleventyConfig.addFilter('filterTagList', filterTagList);

  // Collections
  eleventyConfig.addCollection('posts', posts);
  eleventyConfig.addCollection('tagList', tagList);

  // Plugins
  eleventyConfig.setLibrary('md', markdown);

  return {
    dir: {
      input: 'src',
      data: 'data',
      layouts: 'layouts',
      includes: 'includes',
      components: 'components',
    },
  };
};
