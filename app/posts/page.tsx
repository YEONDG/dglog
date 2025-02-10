import { getAllPosts } from '@/lib/mdx';
import Link from 'next/link';
import React from 'react';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <main>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
