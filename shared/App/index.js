// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { View } from 'react-native';

// Component dependencies
import style from './style';

type Props = {};
export default class App extends PureComponent<Props> {
  render() {
    return (
      <View style={style.root}>
      </View>
    );
  }
}
