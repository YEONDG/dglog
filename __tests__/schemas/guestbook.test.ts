import { guestbookSchema } from '@/schemas/guestbook';

describe('방명록 스키마 검증', () => {
  it('유효한 데이터 검증', () => {
    const validData = {
      name: '테스터',
      message: '안녕하세요',
      password: '1234',
    };

    const result = guestbookSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('빈 필드 검증', () => {
    const invalidData = {
      name: '',
      message: '',
      password: '',
    };

    const result = guestbookSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors).toHaveLength(3);
      expect(result.error.errors[0].message).toBe('이름은 필수입니다.');
      expect(result.error.errors[1].message).toBe('메시지는 필수입니다.');
      expect(result.error.errors[2].message).toBe('비밀번호는 필수입니다.');
    }
  });

  it('최대 길이 초과 검증', () => {
    const invalidData = {
      name: '너무긴이름'.repeat(3),
      message: '너무긴메시지'.repeat(10),
      password: '너무긴비밀번호'.repeat(2),
    };

    const result = guestbookSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.errors).toHaveLength(3);
      expect(result.error.errors[0].message).toBe('이름은 10자 이하여야 합니다.');
      expect(result.error.errors[1].message).toBe('메시지는 30자 이하여야 합니다.');
      expect(result.error.errors[2].message).toBe('비밀번호는 10자 이하여야 합니다.');
    }
  });
});
