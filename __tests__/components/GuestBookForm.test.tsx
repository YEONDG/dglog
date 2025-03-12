import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GuestBookForm } from '@/components/guest/guestbook-form';

describe('GuestBookForm', () => {
  const mockAddFormAction = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders form fields', () => {
    render(<GuestBookForm addFormAction={mockAddFormAction} />);

    expect(screen.getByLabelText(/이름/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/비밀번호/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/메시지/i)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<GuestBookForm addFormAction={mockAddFormAction} />);

    const submitButton = screen.getByRole('button', { name: /등록/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('이름은 필수입니다.')).toBeInTheDocument();
      expect(screen.getByText('비밀번호는 필수입니다.')).toBeInTheDocument();
      expect(screen.getByText('메시지는 필수입니다.')).toBeInTheDocument();
      expect(screen.getByLabelText(/비밀글로 작성하기/i)).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    render(<GuestBookForm addFormAction={mockAddFormAction} />);

    await user.type(screen.getByLabelText(/이름/i), '테스터');
    await user.type(screen.getByLabelText(/비밀번호/i), '1234');
    await user.type(screen.getByLabelText(/메시지/i), '테스트 메시지');

    const submitButton = screen.getByRole('button', { name: /등록/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockAddFormAction).toHaveBeenCalled();
      expect(mockAddFormAction.mock.calls[0][0].get('isPrivate')).toBe('false');
    });
  });

  it('validates field length constraints', async () => {
    const user = userEvent.setup();
    render(<GuestBookForm addFormAction={mockAddFormAction} />);

    await user.type(screen.getByLabelText(/이름/i), '너무 긴 이름입니다'.repeat(3));
    await user.type(screen.getByLabelText(/메시지/i), '너무 긴 메시지입니다.'.repeat(10));

    const submitButton = screen.getByRole('button', { name: /등록/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('이름은 10자 이하여야 합니다.')).toBeInTheDocument();
      expect(screen.getByText('메시지는 30자 이하여야 합니다.')).toBeInTheDocument();
    });
  });
});
