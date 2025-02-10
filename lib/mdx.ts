import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'app/posts/content');

export function getAllPosts() {
  const filenames = fs.readdirSync(contentDirectory);

  return filenames.map((filename) => {
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.mdx', ''),
      ...data,
    };
  });
}

export function getPostBySlug(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return { content, data };
}
