// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';

// App depdendencies
import type { Activity as ActivityDef } from './../types';

// Component dependencies
import style from './style';

type Props = {
  activity: ActivityDef,
};

export default class App extends PureComponent<Props> {

  render() {

    return (
      <View style={style.root}>
        <Text style={style.text}>
          {JSON.stringify(this.props.activity)}
        </Text>
      </View>
    );
  }
}
