import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

type MdastNode = {
  type: string;
  depth?: number;
  children?: MdastNode[];
};

/**
 * The page template already renders the post title as the only <h1>, so every
 * heading written in the body shifts down one level. Keeps the document
 * outline valid and lets `.prose-post h2` do the styling.
 */
function remarkDemoteHeadings() {
  return (tree: MdastNode) => {
    const walk = (node: MdastNode) => {
      if (node.type === 'heading' && typeof node.depth === 'number' && node.depth < 6) {
        node.depth += 1;
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}

/** Markdown -> HTML. GFM on, headings demoted and given ids. */
export async function markdownToHtml(markdown: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkDemoteHeadings)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeSlug)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return String(file);
}
