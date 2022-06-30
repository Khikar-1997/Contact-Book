import * as React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const Contacts = ({navigation}) => {
  return (
    <View style={styles.contactScreen}>
      <Button title="Add" onPress={() => navigation.navigate('AddContact')} />
    </View>
  );
};

const styles = StyleSheet.create({
  contactScreen: {
    flex: 1,
  },
});

export default Contacts;
