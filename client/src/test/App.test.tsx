import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material/styles';
import App from '../App';
import theme from '../theme';

test('App renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
  expect(document.body).not.toBeEmptyDOMElement();
});
