import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PeopleScreen from './PeopleScreen';
import SpaceshipsScreen from './SpaceshipsScreen';
import PlanetsScreen from './PlanetsScreen';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="People" component={PeopleScreen} />
      <Tab.Screen name="Spaceships" component={SpaceshipsScreen} />
      <Tab.Screen name="Planets" component={PlanetsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
