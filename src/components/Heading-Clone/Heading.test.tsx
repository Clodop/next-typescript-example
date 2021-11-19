import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';

describe('<Heading />', () => {
  it('should render with default values', () => {
    renderTheme(<Heading />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
