import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const allSpaceshipsUrl = 'https://swapi.dev/api/starships/';
const getAllSpaceships = async (url: string) => {
  const targetUrl = url && url !== '' ? url : allSpaceshipsUrl;
  const response = await axios.get(targetUrl);
  return response.data;
};

export const UseGetAllSpaceships = (url: string) => {
  const {data, isLoading} = useQuery(['spaceships', url], async () =>
    getAllSpaceships(url),
  );
  return {data, isLoading};
};
