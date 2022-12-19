import rss from '@astrojs/rss';
import sanitizeHtml from 'sanitize-html';

const postImportResult = import.meta.glob('./blog/**/*.md', { eager: true }); 
const posts = Object.values(postImportResult);
// console.log(postImportResult)
export const get = () => rss({
  // `<title>` field in output xml
  title: 'The Distillery',
  // `<description>` field in output xml
  description: 'A blog about community and DevRel strategy',
  // base URL for RSS <item> links
  // SITE will use "site" from your project's astro.config.
  site: import.meta.env.SITE,
  items: import.meta.glob('./blog/**/*.md'),
  items: posts.map((post) => ({
    link: post.url,
    title: post.frontmatter.title,
    pubDate: post.frontmatter.pubDate,
    content: sanitizeHtml(post.compiledContent()),
    }))
});