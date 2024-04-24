import { render, screen } from '@testing-library/react';
import Logo from './logo';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-router/history-router';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const logoLinkTestId = 'logo';
    const imageTestId = 'logo-img';

    render(
      <HistoryRouter history={history}>
        <Logo />
      </HistoryRouter>
    );

    const logoLink = screen.getByTestId(logoLinkTestId);
    const image = screen.getByTestId(imageTestId);

    expect(logoLink).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });
});
