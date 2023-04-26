import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {UseGetAllPlanets} from '../common/hooks/getPlanetQuery';

const PlanetsScreen = () => {
  const [url, setUrl] = useState('');

  const {data, isLoading} = UseGetAllPlanets(url);

  const goToNextPage = async () => {
    if (data?.next) {
      setUrl(data?.next);
    }
  };

  const goToPreviousPage = async () => {
    if (data?.previous) {
      setUrl(data?.previous);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.item}>Name</Text>
      <Text style={styles.item}>Diameter</Text>
      <Text style={styles.item}>Climate</Text>
      <Text style={styles.item}>Population{'\n'}</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data?.results ? (
        data.results.map(
          (planets: {
            name: String;
            diameter: String;
            climate: String;
            population: String;
          }) => {
            return (
              <>
                <Text style={styles.item}>{`${planets.name}`}</Text>
                <Text style={styles.item}>{`${planets.diameter}`}</Text>
                <Text style={styles.item}>{`${planets.climate}`}</Text>
                <Text style={styles.item}>{`${planets.population}`}</Text>
              </>
            );
          },
        )
      ) : (
        <Text>Whoops no data available</Text>
      )}
      <View style={styles.button}>
        <View style={styles.button}>
          <TouchableOpacity onPress={goToPreviousPage}>
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={goToNextPage}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlanetsScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',
    marginLeft: 5,
    marginTop: 15,
    marginRight: 5,
  },
  item: {
    width: '25%',
    marginRight: -15,
  },
});

interface Planets {
  name: String;
  height: String;
  mass: String;
  hair_color: String;
  skin_color: String;
}

export interface PlanetsResult {
  data: Planets[];
  next: string;
  previous: string;
}
