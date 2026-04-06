import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import ArtifactsSection from '../components/sections/ArtifactsSection';
import theme from '../theme';

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}

test('ArtifactsSection renders confidentiality notice', () => {
  renderWithTheme(<ArtifactsSection />);
  expect(screen.getByText(/Confidentiality Notice/i)).toBeInTheDocument();
});

test('ArtifactsSection renders confidentiality notice with empty artifacts array', () => {
  renderWithTheme(<ArtifactsSection artifacts={[]} />);
  expect(screen.getByText(/Confidentiality Notice/i)).toBeInTheDocument();
});
