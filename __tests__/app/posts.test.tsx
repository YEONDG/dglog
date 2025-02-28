import { render, screen } from '@testing-library/react';
import PostsPage from '@/app/posts/page';

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
  getNotionPostsByTag: jest.fn().mockImplementation((tag) =>
    Promise.resolve([
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
    ])
  ),
}));

describe('PostsPage', () => {
  it('포스트 목록 렌더링', async () => {
    render(await PostsPage({ searchParams: {} }));

    // 포스트 제목 확인
    expect(screen.getByText('테스트 포스트 1')).toBeInTheDocument();
    expect(screen.getByText('테스트 포스트 2')).toBeInTheDocument();

    // 태그 확인 (태그 섹션에서만 검색)
    const tagsSection = screen.getByRole('heading', { name: /tags/i }).parentElement;
    expect(tagsSection).toBeInTheDocument();
    expect(tagsSection).toHaveTextContent('React');
    expect(tagsSection).toHaveTextContent('TypeScript');
    expect(tagsSection).toHaveTextContent('Next.js');

    // 날짜 확인 (정규식 사용)
    const dateRegex1 = /2024[.\s]*3[.\s]*20/;
    const dateRegex2 = /2024[.\s]*3[.\s]*21/;

    expect(screen.getByText(dateRegex1)).toBeInTheDocument();
    expect(screen.getByText(dateRegex2)).toBeInTheDocument();
  });

  it('포스트 링크 확인', async () => {
    render(await PostsPage({ searchParams: {} }));

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/posts/test-post-1');
    expect(links[1]).toHaveAttribute('href', '/posts/test-post-2');
  });

  it('태그 필터링 확인', async () => {
    render(await PostsPage({ searchParams: { tag: 'React' } }));

    // React 태그가 있는 포스트만 표시되는지 확인
    expect(screen.getByText('테스트 포스트 1')).toBeInTheDocument();
    expect(screen.queryByText('테스트 포스트 2')).not.toBeInTheDocument();

    // 선택된 태그 표시 확인
    expect(screen.getByText('태그:')).toBeInTheDocument();
    const selectedTag = screen.getByText('React', { selector: '.bg-gray-100' });
    expect(selectedTag).toBeInTheDocument();
    expect(screen.getByText('× 필터 제거')).toBeInTheDocument();
  });
});
