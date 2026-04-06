import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import { contactInfo } from '../data/contact';

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactFormState {
  values: ContactFormValues;
  errors: Partial<ContactFormValues>;
  status: 'idle' | 'submitting' | 'success' | 'error';
}

export function validateContactForm(values: ContactFormValues): Partial<ContactFormValues> {
  const errors: Partial<ContactFormValues> = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  if (!values.message.trim()) errors.message = 'Message is required';
  return errors;
}

const INITIAL_VALUES: ContactFormValues = { name: '', email: '', message: '' };

export default function ContactForm() {
  const [state, setState] = useState<ContactFormState>({
    values: INITIAL_VALUES,
    errors: {},
    status: 'idle',
  });

  const handleChange = (field: keyof ContactFormValues) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prev) => ({
      ...prev,
      values: { ...prev.values, [field]: e.target.value },
      // Clear the error for this field as the user types
      errors: { ...prev.errors, [field]: undefined },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateContactForm(state.values);
    if (Object.keys(errors).length > 0) {
      setState((prev) => ({ ...prev, errors }));
      return;
    }

    setState((prev) => ({ ...prev, status: 'submitting', errors: {} }));

    try {
      const response = await fetch('https://formspree.io/f/xjgpjzwo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(state.values),
      });

      if (response.ok) {
        setState({ values: INITIAL_VALUES, errors: {}, status: 'success' });
      } else {
        setState((prev) => ({ ...prev, status: 'error' }));
      }
    } catch {
      setState((prev) => ({ ...prev, status: 'error' }));
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {state.status === 'success' && (
        <Alert severity="success">Message sent! I'll be in touch soon.</Alert>
      )}
      {state.status === 'error' && (
        <Alert severity="error">
          Message could not be sent. Please try again or email{' '}
          <strong>{contactInfo.email}</strong> directly.
        </Alert>
      )}

      <TextField
        label="Name"
        value={state.values.name}
        onChange={handleChange('name')}
        error={Boolean(state.errors.name)}
        helperText={state.errors.name}
        required
        fullWidth
        inputProps={{ 'aria-label': 'Name' }}
      />

      <TextField
        label="Email"
        type="email"
        value={state.values.email}
        onChange={handleChange('email')}
        error={Boolean(state.errors.email)}
        helperText={state.errors.email}
        required
        fullWidth
        inputProps={{ 'aria-label': 'Email' }}
      />

      <TextField
        label="Message"
        value={state.values.message}
        onChange={handleChange('message')}
        error={Boolean(state.errors.message)}
        helperText={state.errors.message}
        required
        fullWidth
        multiline
        rows={5}
        inputProps={{ 'aria-label': 'Message' }}
      />

      <Button
        type="submit"
        variant="contained"
        disabled={state.status === 'submitting'}
        startIcon={state.status === 'submitting' ? <CircularProgress size={18} color="inherit" /> : null}
        sx={{ alignSelf: 'flex-start' }}
      >
        {state.status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </Box>
  );
}
