import * as React from 'react';
// import {RadioButton} from 'react-native-paper';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {CheckBox, Button, Icon} from 'react-native-elements';
const Check = () => {
  const [check1, setCheck1] = React.useState(false);
  return (
    <View>
      <Text style={{color: 'red'}}>Check</Text>

      <CheckBox title={'Press'} />
    </View>
  );
};

export default Check;
