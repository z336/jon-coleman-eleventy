const markdownIt = require('markdown-it');
const markdownItMark = require('markdown-it-mark');
const markdownItAnchor = require('markdown-it-anchor');
const markdownItTOC = require('markdown-it-toc-done-right');

// Slugify for anchor links
const anchorSlugify = (s) =>
  encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[.,\/#!$%\^&\*;:{}=_`~()]/g, '')
      .replace(/\s+/g, '-')
  );

// Markdown parsing
const markdown = markdownIt({
  html: true,
  breaks: false,
  typographer: true,
})
  .disable('code')
  .use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    level: [2, 3],
    slugify: anchorSlugify,
  })
  .use(markdownItMark)
  .use(markdownItTOC, {
    containerClass: 'table-of-contents',
  });

module.exports = markdown;
