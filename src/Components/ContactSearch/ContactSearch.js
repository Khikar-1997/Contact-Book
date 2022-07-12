import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import MOCK_DATA from '../../../data/MOCK_DATA.json';

import filterContactByInputtedValue from '../../Utils/filterContactByInputtedValue';
const ContactSearch = () => {
  const [searchedText, setSearchedText] = useState('');

  console.log(filterContactByInputtedValue(searchedText, MOCK_DATA));
  return (
    <View style={{ width: '100%', flexDirection: 'row' }}>
      <TextInput
        placeholder="Search"
        onChangeText={setSearchedText}
        defaultValue={searchedText}
        style={{ paddingLeft: 4 }}
      />
    </View>
  );
};

export default ContactSearch;
