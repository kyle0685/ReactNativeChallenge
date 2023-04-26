import SpaceshipsScreen from './SpaceshipsScreen';
import {render} from '@testing-library/react-native';
import React from 'react';

const mockSpaceships: {
  data: any;
  isLoading: boolean;
} = {
  data: {
    results: [
      {
        name: 'xwing',
        cost_in_credits: '1500',
        crew: '2',
      },
    ],
  },
  isLoading: false,
};

jest.mock('../common/hooks/getSpaceshipsQuery', () => ({
  UseGetAllSpaceships: () => mockSpaceships,
}));

describe('SpaceshipsScreen', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render the component', async () => {
    const {getByText, getByTestId} = render(
      <SpaceshipsScreen testIdName={'ship'} />,
    );
    expect(getByText('xwing')).toBeDefined();
    expect(getByTestId('ship')).toBeDefined();
  });
});
