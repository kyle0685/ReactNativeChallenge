import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {UseGetAllPeople} from '../../src/common/hooks/getPeopleQuery';

const PeopleScreen = () => {
  const [url, setUrl] = useState('');
  const {data, isLoading} = UseGetAllPeople(url);
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
      <Text style={styles.item}>Height{'\n'}</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data?.results ? (
        data?.results.map(
          (person: {
            name: String;
            height: String;
            mass: String;
            hair_color: String;
            skin_color: String;
          }) => {
            return (
              <>
                <Text style={styles.item}>{`${person?.name}`}</Text>
                <Text style={styles.item}>{`${person?.height}`}</Text>
              </>
            );
          },
        )
      ) : (
        <Text>Whoops no data available</Text>
      )}
      <View style={styles.button}>
        <View style={styles.button}>
          <TouchableOpacity onPress={goToPreviousPage} testID="previousButton">
            <Text testID="name">Previous</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={goToNextPage} testID="nextButton">
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PeopleScreen;

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
    width: '50%',
    marginLeft: 50,
    marginRight: -50,
  },
});

interface Person {
  name: String;
  height: String;
  mass: String;
  hair_color: String;
  skin_color: String;
}

export interface PersonResult {
  data: Person[];
  next: string;
  previous: string;
}
