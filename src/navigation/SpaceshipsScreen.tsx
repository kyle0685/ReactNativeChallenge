import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {UseGetAllSpaceships} from '../common/hooks/getSpaceshipsQuery';

const SpaceshipsScreen = ({testIdName = ''}) => {
  const [url, setUrl] = useState('');
  const {data, isLoading} = UseGetAllSpaceships(url);
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
      <Text testID={`${testIdName}`} style={styles.item}>
        Name
      </Text>
      <Text style={styles.item}>Cost{'\n'}</Text>
      <Text style={styles.item}>Crew{'\n'}</Text>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : data?.results ? (
        data?.results.map(
          (spaceships: {
            name: String;
            cost_in_credits: String;
            crew: String;
          }) => {
            return (
              <>
                <Text style={styles.item}>{`${spaceships?.name}`}</Text>
                <Text
                  style={styles.item}>{`${spaceships?.cost_in_credits}`}</Text>
                <Text style={styles.item}>{`${spaceships.crew}`}</Text>
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

export default SpaceshipsScreen;

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
    width: '33%',
    marginLeft: 33,
    marginRight: -33,
  },
});

interface Spaceships {
  name: String;
  cost_in_credits: String;
  crew: String;
}

export interface SpaceshipsResult {
  data: Spaceships[];
  next: string;
  previous: string;
}
