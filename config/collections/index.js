const filters = require('../filters/time');

// Create a collection of posts and always display them in reverse chronological order
const posts = (collection) => {
  return collection.getFilteredByGlob('src/posts/**/*.md').reverse();
};

// Create an array of all tags
const tagList = (collection) => {
  const tagSet = new Set();
  collection.getAll().forEach((item) => {
    (item.data.tags || []).forEach((tag) => tagSet.add(tag));
  });

  return filters.filterTagList([...tagSet]);
};

module.exports = {
  posts,
  tagList,
};
