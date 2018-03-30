// @flow
// NPM dependencies
import React, { PureComponent } from 'react';
import { Switch, Picker, Text, View } from 'react-native'; // eslint-disable-line

// App dependencies
import grades from './../fixtures';

// Component dependencies
import style from './style';

type Props = {};
export default class App extends PureComponent<Props> {

  constructor () {
    super();
    this.state = {
      gradeIndex: 0,
      activeCategories: [],
      grades,
    };
  }

  updateCategory (category: string, add: boolean = true) {
    this.setState(({ activeCategories }) => ({
      activeCategories: add
        ? [...new Set(activeCategories.concat(category))] // dedupes
        : activeCategories.filter(cat => cat !== category),
    }));
  }

  render() {

    const gradeData = this.state.grades[this.state.gradeIndex];

    return (
      <View style={style.root}>
        <Picker
          selectedValue={this.state.gradeIndex}
          onValueChange={(_, gradeIndex) => this.setState({ gradeIndex })}
        >
          {this.state.grades.map((grade, index) => (
            <Picker
              key={index}
              value={index}
              label={`Grade ${grade.grade}`}
            />
          ))}
        </Picker>
        <View>
          {gradeData.content.map((category, index) => (
            <View key={index}>
              <Switch
                value={this.state.activeCategories.includes(category.title)}
                onValueChange={(well) => this.updateCategory(category.title, well)}
              />
              <Text>{category.title}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
