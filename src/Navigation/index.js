import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Routes from '../Constants/navigationRouts';

import Screens from './screens';

const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.CONTACTS}>
        <Stack.Screen name={Routes.CONTACTS} component={Screens.Contacts} />
        <Stack.Screen
          name={Routes.ADD_CONTACTS}
          component={Screens.AddContact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
