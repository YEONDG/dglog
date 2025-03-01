import { render, screen } from '@testing-library/react';
import { NotionPosts } from '@/components/posts/notion-posts';

// Mock getNotionPosts
jest.mock('@/lib/notion', () => ({
  getNotionPosts: jest.fn().mockResolvedValue([
    {
      id: 'test-post-1',
      properties: {
        제목: {
          title: [{ plain_text: '테스트 포스트 1' }],
        },
        태그: {
          multi_select: [{ name: 'React' }, { name: 'TypeScript' }],
        },
        생성일: {
          created_time: '2024-03-20T00:00:00.000Z',
        },
      },
    },
    {
      id: 'test-post-2',
      properties: {
        제목: {
          title: [{ plain_text: '테스트 포스트 2' }],
        },
        태그: {
          multi_select: [{ name: 'Next.js' }],
        },
        생성일: {
          created_time: '2024-03-21T00:00:00.000Z',
        },
      },
    },
  ]),
  getNotionTags: jest.fn().mockResolvedValue(['React', 'TypeScript', 'Next.js']),
}));

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
  useSearchParams: () => new URLSearchParams(),
}));

describe('NotionPosts', () => {
  it('포스트 목록 렌더링', async () => {
    const { container } = render(await NotionPosts());

    // 포스트 제목 확인
    expect(screen.getByText('테스트 포스트 1')).toBeInTheDocument();
    expect(screen.getByText('테스트 포스트 2')).toBeInTheDocument();

    // 태그 확인
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();

    // 날짜 확인
    const dateRegex1 = /2024년 03월 20일/;
    const dateRegex2 = /2024년 03월 21일/;
    expect(screen.getByText(dateRegex1)).toBeInTheDocument();
    expect(screen.getByText(dateRegex2)).toBeInTheDocument();

    // 링크 확인
    const links = container.querySelectorAll('a');
    expect(Array.from(links).some((link) => link.getAttribute('href') === '/posts/test-post-1')).toBeTruthy();
    expect(Array.from(links).some((link) => link.getAttribute('href') === '/posts/test-post-2')).toBeTruthy();
  });
});
