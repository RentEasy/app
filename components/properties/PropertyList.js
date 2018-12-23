import React from 'react';
import { Text, View } from 'react-native';
import Property from './Property'

export default class PropertyList extends React.Component {
  render() {
    let count = 10;

    let properties = [];
    let i;
    for (i = 0; i < count; i++) {
      properties.push(<Property key={i} />)
    }


    return <View>
      {properties}
    </View>;
  }
}
