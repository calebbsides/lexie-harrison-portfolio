import { validateContactForm } from '../components/ContactForm';

describe('validateContactForm', () => {
  test('returns errors for all empty fields', () => {
    const errors = validateContactForm({ name: '', email: '', message: '' });
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });

  test('returns an error for invalid email', () => {
    const errors = validateContactForm({ name: 'Alice', email: 'not-an-email', message: 'Hello' });
    expect(errors.email).toBeTruthy();
    expect(errors.name).toBeUndefined();
    expect(errors.message).toBeUndefined();
  });

  test('returns no errors for valid input', () => {
    const errors = validateContactForm({ name: 'Alice', email: 'alice@example.com', message: 'Hello' });
    expect(Object.keys(errors)).toHaveLength(0);
  });
});
