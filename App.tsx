import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/navigation/BottomTab';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
