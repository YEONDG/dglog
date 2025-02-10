import type { NextConfig } from 'next';
import withMDX from '@next/mdx';

const nextConfig: NextConfig = withMDX({
  extension: /\.mdx?$/, // MDX 파일 확장자 처리
})({
  pageExtensions: ['ts', 'tsx', 'mdx'], // 지원할 파일 확장자
  reactStrictMode: true,
});

export default nextConfig;
