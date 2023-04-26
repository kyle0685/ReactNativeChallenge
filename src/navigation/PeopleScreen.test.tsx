import PeopleScreen from './PeopleScreen';
import {render} from '@testing-library/react-native';
import React from 'react';

const mockPeople: {
  data: any;
  isLoading: boolean;
} = {
  data: {
    results: [
      {
        name: 'Luke',
        height: '123',
      },
    ],
  },
  isLoading: false,
};

jest.mock('../common/hooks/getPeopleQuery', () => ({
  UseGetAllPeople: () => mockPeople,
}));

describe('PeopleScreen', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('should render the component', async () => {
    const {getByText} = render(<PeopleScreen />);
    expect(getByText('Luke')).toBeDefined();
  });
});
