import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screens from './screens';

import * as Routes from '../Constants/navigationRouts';

const Stack = createNativeStackNavigator();

const Root = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={Routes.CONTACTS}>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name={Routes.SEARCH_CONTACT}
          component={Screens.SearchContact}
          options={Screens.SearchContact.options}
        />
      </Stack.Group>
      <Stack.Screen
        name={Routes.CONTACTS}
        component={Screens.Contacts}
        options={Screens.Contacts.options}
      />
      <Stack.Screen
        name={Routes.ADD_CONTACTS}
        component={Screens.AddContact}
        options={Screens.AddContact.options}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Root;
