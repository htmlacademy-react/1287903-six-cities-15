import { render, screen } from '@testing-library/react';
import { makeFakeOffer } from '../../utils/mocks';
import { CITIES } from '../../const';
import Map from './map';

describe('Component: Map', () => {
  it('should render correct', () => {
    const mockCards = Array.from({length: 3}, makeFakeOffer);
    const mockCity = CITIES[0];
    const mockMapType = 'cities';
    const expectedTestId = 'map';

    render(<Map mapType={mockMapType} offers={mockCards} city={mockCity} />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
