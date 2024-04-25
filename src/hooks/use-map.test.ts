import { renderHook } from '@testing-library/react';
import useMap from './use-map';
import { CITIES } from '../const';

describe('Hook: useMap', () => {
  it('should return map element', () => {
    const mockCity = CITIES[0];
    const mockMap = { current: document.createElement('section') };

    const { result } = renderHook(() => useMap(mockMap, mockCity));
    const map = result.current;

    expect(typeof map).toBe('object');
  });
});
