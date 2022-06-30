import * as React from 'react';
import Contacts from './Contacts';
import AddContact from './AddContact';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRoyeName="Contacts">
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="AddContact" component={AddContact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
