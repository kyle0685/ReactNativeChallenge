import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const allPlanetsUrl = 'https://swapi.dev/api/planets/';
const getAllPlanets = async (url: string) => {
  const targetUrl = url && url !== '' ? url : allPlanetsUrl;
  const response = await axios.get(targetUrl);
  return response.data;
};

export const UseGetAllPlanets = (url: string) => {
  const {data, isLoading} = useQuery(['planets', url], async () =>
    getAllPlanets(url),
  );
  return {data, isLoading};
};
