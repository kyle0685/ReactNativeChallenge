import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export const allPeopleUrl = 'https://swapi.dev/api/people/';
const getAllPeople = async (url: string) => {
  const targetUrl = url && url !== '' ? url : allPeopleUrl;
  const response = await axios.get(targetUrl);
  return response.data;
};

export const UseGetAllPeople = (url: string) => {
  const {data, isLoading} = useQuery(['people', url], async () =>
    getAllPeople(url),
  );
  return {data, isLoading};
};
