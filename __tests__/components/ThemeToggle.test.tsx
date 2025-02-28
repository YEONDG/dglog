import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/components/home/ui/theme-toggle';

// Mock localStorage
const mockLocalStorage = {
  store: {} as { [key: string]: string },
  getItem(key: string) {
    return this.store[key];
  },
  setItem(key: string, value: string) {
    this.store[key] = value;
  },
  clear() {
    this.store = {};
  },
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

// Mock document.documentElement
Object.defineProperty(document, 'documentElement', {
  writable: true,
  value: {
    classList: {
      toggle: jest.fn(),
      add: jest.fn(),
    },
  },
});

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLocalStorage.clear();
  });

  it('renders theme toggle button', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('loads saved theme from localStorage on mount', () => {
    mockLocalStorage.setItem('theme', 'dark');
    render(<ThemeToggle />);
    expect(document.documentElement.classList.add).toHaveBeenCalledWith('dark');
  });

  it('toggles theme when clicked', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(document.documentElement.classList.toggle).toHaveBeenCalledWith('dark');
    expect(mockLocalStorage.getItem('theme')).toBe('dark');
  });
});
