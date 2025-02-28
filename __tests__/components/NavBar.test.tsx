import { render, screen } from '@testing-library/react';
import { NavBar } from '@/components/nav-bar';

describe('NavBar', () => {
  it('renders logo and navigation links', () => {
    render(<NavBar />);

    // 로고 확인
    expect(screen.getByText('DGlog')).toBeInTheDocument();

    // 네비게이션 링크 확인
    const links = ['Home', 'Posts', 'About', 'Guest'];
    links.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest('a')).toHaveAttribute('href', link === 'Home' ? '/' : `/${link.toLowerCase()}`);
    });
  });

  it('renders theme toggle button', () => {
    render(<NavBar />);
    const themeToggleButton = screen.getByRole('button');
    expect(themeToggleButton).toBeInTheDocument();
  });
});
