import PlanetsScreen from './PlanetsScreen';
import {render} from '@testing-library/react-native';
import React from 'react';

const mockPlanets: {
  data: any;
  isLoading: boolean;
} = {
  data: {
    results: [
      {
        name: 'Hoth',
        diameter: '20000000',
        climate: '34572',
        population: '30000',
      },
    ],
  },
  isLoading: false,
};

jest.mock('../common/hooks/getPlanetQuery', () => ({
  UseGetAllPlanets: () => mockPlanets,
}));

describe('PlanetsScreen', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render the component', async () => {
    const {getByText} = render(<PlanetsScreen />);
    expect(getByText('Hoth')).toBeDefined();
  });
});
