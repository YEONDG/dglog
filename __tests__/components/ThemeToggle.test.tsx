import { render, screen } from '@testing-library/react';
import { ThemeToggle } from '@/components/theme-toggle';

describe('ThemeToggle', () => {
  // localStorage mock 설정
  const mockLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn(),
  };

  // classList mock 설정
  const mockClassList = {
    add: jest.fn(),
    remove: jest.fn(),
    toggle: jest.fn(),
    contains: jest.fn(),
  };

  beforeEach(() => {
    // 테스트 전에 모든 mock 초기화
    jest.clearAllMocks();

    // localStorage mock 적용
    Object.defineProperty(window, 'localStorage', {
      value: mockLocalStorage,
    });

    // document.documentElement.classList mock 적용
    Object.defineProperty(document.documentElement, 'classList', {
      value: mockClassList,
    });
  });

  it('loads saved theme from localStorage on mount', () => {
    // localStorage에서 'dark' 테마를 반환하도록 설정
    mockLocalStorage.getItem.mockReturnValue('dark');

    render(<ThemeToggle />);

    // classList.add가 'dark'로 호출되었는지 확인
    expect(mockClassList.add).toHaveBeenCalledWith('dark');
  });

  it('renders the theme toggle button', () => {
    mockLocalStorage.getItem.mockReturnValue('light');
    render(<ThemeToggle />);

    // button 요소가 있는지 확인
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
